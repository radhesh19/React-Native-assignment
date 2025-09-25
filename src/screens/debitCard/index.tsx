import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Switch,
  FlatList,
  ActivityIndicator,
  ListRenderItem,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import AspireLogo from '../../assets/images/AspireLogo.svg';
import Logo from '../../assets/images/Logo.svg';
import VisaLogo from '../../assets/images/VisaLogo.svg';
import EyeIcon from '../../assets/images/Group.svg';
import TransferIcon from '../../assets/images/Transfer.svg';
import CardIcon from '../../assets/images/Transfer1.svg';
import NewCardIcon from '../../assets/images/Transfer3.svg';
import DeactivateIcon from '../../assets/images/Transfer2.svg';
import Insight from '../../assets/images/insight.svg';
import DebitCardConstants from './constant';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/debitCard/action';
import { RootState, AppDispatch } from '../../redux/store';
import { IMenuOption } from '../../types/debit_card.types';

// Icon map for dynamic rendering
const actionIcons: Record<string, React.FC<{ width?: number; height?: number }>> = {
  topUpAccount: Insight,
  setSpendingLimit: TransferIcon,
  freezeCard: CardIcon,
  getNewCard: NewCardIcon,
  viewDeactivatedCards: DeactivateIcon,
};

const DebitCardScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, data: cardData, error } = useSelector(
    (state: RootState) => state.debitCard
  );

  const { accountInfo, cardDetails, menuOptions } = cardData || {};

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  //////Header and Balance view
  const headerBackgroundView = () => (
    <View style={styles.headerBackground}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{DebitCardConstants.headerTitle}</Text>
        <TouchableOpacity>
          <Logo width={28} height={28} />
        </TouchableOpacity>
      </View>
      <Text style={styles.balanceLabel}>{DebitCardConstants.balanceLabel}</Text>
      <View style={styles.balanceRow}>
        <View style={styles.currencyBadge}>
          <Text style={styles.currencyText}>
            {DebitCardConstants.currencySymbol}
          </Text>
        </View>
        <Text style={styles.balanceAmount}>
          {accountInfo?.availableBalance?.amount}
        </Text>
      </View>
    </View>
  );

  ///card top view
  const cardTopView = () => (
    <View style={styles.topView}>
      <TouchableOpacity activeOpacity={1} style={styles.hideButton}>
        <EyeIcon width={16} height={16} />
        <Text style={styles.hideText}>{DebitCardConstants.hideCardNumber}</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={{ flex: 1, alignSelf: 'flex-end' }}>
          <AspireLogo width={85} height={35} />
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.cardName}>{cardDetails?.cardName}</Text>
        </View>
        <Text style={styles.cardNumber}>{cardDetails?.cardNumber}</Text>
        <View style={styles.cardDetailsRow}>
          <Text style={styles.cardDetails}>{cardDetails?.expiryDate}</Text>
          <Text style={[styles.cardDetails, { marginLeft: 25 }]}>
            {cardDetails?.cvv}
          </Text>
        </View>
        <View style={styles.cardBrandRow}>
          <VisaLogo width={65} height={25} />
        </View>
      </View>
    </View>
  );

  /////Spending Limit and progress bar view
  const progressBarView = () => (
    <View style={styles.progressBarMainView}>
      <View style={styles.progressBarTextView}>
        <View style={styles.limitRow}>
          <Text style={styles.spendingLabel}>
            {DebitCardConstants.spendingLabel}
          </Text>
        </View>
        <View style={styles.limitRow}>
          <Text style={styles.limitAmountGreen}>
            {DebitCardConstants.spendingCurrentAmount}
          </Text>
          <Text style={styles.limitAmountGrey}>
            {' '}
            | {DebitCardConstants.spendingTotalAmount}
          </Text>
        </View>
      </View>
      <View style={styles.progressBarView}>
        <ProgressBar
          progress={0.29}
          color="#01D167"
          style={styles.progressBar}
        />
      </View>
    </View>
  );

  const renderItem: ListRenderItem<IMenuOption> = ({ item }) => {
    const Icon = actionIcons[item.action];
    return (
      <View style={styles.optionItem}>
        {Icon && <Icon width={32} height={32} />}
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>{item.title}</Text>
          {item.description && (
            <Text style={styles.optionSubtitle}>{item.description}</Text>
          )}
        </View>
        {item.isToggleable && (
          <Switch
            value={item.isToggledOn ?? false}
            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
            onValueChange={value => {
              console.log(`${item.title} toggled: `, value);
            }}
            trackColor={{ false: '#ccc', true: '#01D167' }}
            thumbColor={item.isToggledOn ? '#fff' : '#f4f3f4'}
          />
        )}
      </View>
    );
  };

  const bottomActionView = () => (
    <View style={styles.menuItemStyle}>
      <FlatList
        data={menuOptions}
        keyExtractor={item => item.action}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </View>
  );

  // Show loader if loading
  if (loading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#01D167" />
      </SafeAreaView>
    );
  }

  // Show error if API fails
  if (error) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Text style={{ color: 'red' }}>Failed to load data: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {headerBackgroundView()}
      <View style={styles.absoluteScrollWrapper}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[
            styles.scrollContent,
            { minHeight: Dimensions.get('window').height },
          ]}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={{ flex: 1, backgroundColor: 'transparent' }}>
            {cardTopView()}
            <View style={styles.contentView}>
              <View style={styles.fillerView} />
              {progressBarView()}
              {bottomActionView()}
              <View style={[styles.bottomEmptyView]} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DebitCardScreen;
