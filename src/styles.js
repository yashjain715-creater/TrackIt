import {Dimensions, StyleSheet} from 'react-native';
import COLOR from './Color';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  homesafearea: {
    flex: 1,
    backgroundColor: COLOR.GREY
  },
  profileViewStyle: {
    alignItems: 'center',
    marginTop: height * 0.08
  },
  profileImageStyle: {
    width: height * 0.2,
    height: height * 0.2,
    borderRadius: height * 0.1
  },

  // Home Style Utilities
  balanceIncomeExpenseStyle: {
    flexDirection: 'row',
    borderColor: COLOR.GREY,
    backgroundColor: COLOR.WHITE,
    borderWidth: 1,
    borderRadius: 8,
    margin: width * 0.04,
    paddingVertical: width * 0.03
  },
  balanceStyle: {
    width: width * 0.46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: COLOR.GREY
  },
  incomeExpenseStyle: {
    width: width * 0.46,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incomeExpenseCommonStyle: {
    alignItems: 'center',
    paddingVertical: 8
  },
  plusButtonStyle: {
    marginHorizontal: width * 0.41,
    paddingVertical: width * 0.052,
    backgroundColor: COLOR.YELLOW,
    alignItems: 'center',
    borderRadius: 24
  },
  plusButtonEnd: {
    justifyContent: 'space-between',
    paddingBottom: height * 0.01
  },

  // List Styles
  List: {
    backgroundColor: COLOR.GREY
  },
  transactionsList: {
    marginTop: height * 0.02,
    alignItems: 'center'
  },
  transactionsCard: {
    flexDirection: 'row',
    backgroundColor: COLOR.WHITE,
    width: width * 0.9,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    justifyContent: 'space-between',
    borderRadius: 8,
    elevation: 1
  },

  // Modal Utilities
  modalView: {
    marginTop: height * 0.08,
    height: height,
    backgroundColor: COLOR.WHITE,
    borderRadius: 28,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeading: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width * 0.6,
  },
  iconWidth: {
    width: width * 0.2,
  },
  textWidth: {
    width: width * 0.6,
    alignItems: 'center'
  },
  switchButton: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'center',
    padding: 20
  },
  switchButtonContent: {
    padding: 14,
    backgroundColor: COLOR.YELLOW,
  },
  errorMessage: {
    marginHorizontal: 24,
  },
  currencyShown: {
    alignItems: 'center',
    marginVertical: height * 0.08,
  },
  descriptionShown: {
    alignItems: 'center',
    marginBottom: height * 0.04
  },

  // Basic Utilities
  rowStyle: {
    flexDirection: 'row'
  },
  alignSelfStyle: {
    alignSelf: 'center'
  },
  leftBorder: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12
  },
  rightBorder: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLOR.GREY,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 12
  },

  // Font Utilities
  fontZero: {
    fontSize: 14
  },  
  fontOne: {
    fontSize: 16
  },
  fontTwo: {
    fontSize: 18
  },
  fontThree: {
    fontSize: 24
  },
  fontFour: {
    fontSize: 28
  },
  fontFive: {
    fontSize: 32
  }
});