import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import Logo from '../../assets/logo.png';
import CustomActionsheet from '../../components/CustomActionsheet';
import CustomFilter from '../../components/CustomFilter';
import CustomListView from '../../components/CustomListView';
import GridView from '../../components/GridView';
import HomeHeader from '../../components/homeHeader';
import {
  getFilteredProductsList,
  getProductsList,
} from '../../redux/actions/actions';
import styles from './styles';

const Empty = () => {
  return (
    <View style={styles.emptySection}>
      <Image
        source={require('../../assets/empty.png')}
        style={styles.emptySectionImage}
      />
      <Text style={styles.emptyText}>List is Empty</Text>
    </View>
  );
};

const HomeScreen = ({
  navigation,
  state: {AllProducts, loader, productDetail},
  dispatch: {getProductsList, getFilterdProductList},
}) => {
  const [viewMode, setViewMode] = useState(false);
  const [products, setProducts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [modalVisible, setModalvisible] = useState(false);
  const [isDataFilter, setIsDataFilter] = useState(false);
  const [actionVisible, setActionvisible] = useState(false);
  const ref = useRef(0);
  const {top} = useSafeArea();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getProductsList(ref.current);
    });
    // getProductsList(ref.current);
  }, [navigation, getProductsList]);
  console.log('AllProducts', AllProducts);

  useEffect(() => {
    setProducts(AllProducts.products);
  }, [AllProducts.products]);
  const leftOnPress = () => {
    Alert.alert('This Feature is not available in this version');
  };

  const changeViewMode = () => {
    setViewMode(!viewMode);
  };
  const setModalOn = () => {
    setModalvisible(!modalVisible);
    setIsDataFilter(false);
  };

  const receivedCategory = (val) => {};

  const applySortFilter = (data) => {
    let fill = '';
    data.forEach((item, index) => {
      item.seletedCategory;
      let query = `${item.key}:${item.order}`;
      fill = fill + '&sort=' + query + '&order:desc';
      //
      if (data.length === index + 1) {
        // api calls
        getFilterdProductList(ref.current, fill);
        setIsDataFilter(true);
        setActionvisible(!actionVisible);
      }
    });
  };

  const applyFilter = (data) => {
    let fill = '';
    console.log('filterData' + JSON.stringify(data));
    data.forEach((item, index) => {
      console.log('Item', item, index);
      item.seletedCategory;
      let query = `${item.seletedCategory}=${item.key}`;
      fill = fill + '&' + query + '&order=desc';
      console.log('fill', fill);

      if (data.length === index + 1) {
        // getFilterdProductList(0, fill);
        setIsDataFilter(true);
        setModalvisible(!modalVisible);
      }
    });
  };

  const setActionOn = () => {
    if (productDetail && productDetail.sorts) {
      setActionvisible(!actionVisible);
      setIsDataFilter(false);
    } else {
      Alert.alert(
        ' Oops Something went wrong !',
        'Can not sort this product, please try again later.',
      );
    }
  };
  const handleLoadMore = () => {
    console.log('ref endscroll', ref.current);
    let totatcount = (ref.current = ref.current + 1);
    getProductsList(totatcount);
  };

  const renderView = ({item, index}) => {
    return (
      <View>
        {viewMode ? (
          <CustomListView products={item} />
        ) : (
          <GridView products={item} />
        )}
      </View>
    );
  };
  const ListFooterComponent = () => {
    return (
      <View>
        {loader && (
          <ActivityIndicator size="large" color="red" style={{marginTop: 10}} />
        )}
      </View>
    );
  };

  const displayData = isDataFilter ? products.reverse() : products;

  return (
    <View style={styles.sectionContainer}>
      <HomeHeader
        IconName={'menu'}
        leftOnPress={leftOnPress}
        imgSrc={Logo}
        rightIconPress={leftOnPress}
        rightIconPress1={leftOnPress}
        rightIconPress2={leftOnPress}
        rightIconName={'bookmark-outline'}
        rightIconName1={'search-outline'}
        rightIconName2={'cart-outline'}
        changeViewMode={changeViewMode}
        totalCount={productDetail.totalCount}
        productTitle={productDetail.title ? productDetail.title : 'Total'}
        filterProducts={setModalOn}
        sortProducts={setActionOn}
      />

      <FlatList
        style={{paddingTop: 0}}
        data={displayData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatContainer}
        renderItem={renderView}
        columnWrapperStyle={{flexWrap: 'wrap'}}
        numColumns={2}
        refreshing={true}
        initialNumToRender={4}
        maxToRenderPerBatch={1}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={Empty}
        ListFooterComponent={ListFooterComponent}
        onEndReached={handleLoadMore}
      />
      <CustomActionsheet
        modalVisible={actionVisible}
        setModalVisible={setActionOn}
        productData={productDetail}
        sortProducts={applySortFilter}
      />
      <CustomFilter
        modalVisible={modalVisible}
        setModalVisible={setModalOn}
        productData={productDetail}
        setCategory={receivedCategory}
        applyFilter={applyFilter}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    state: {
      AllProducts: state.productList,
      loader: state.productList.loading,
      productDetail: state.productList.productDetail,
    },
  };
};
const mapDispatchToProps = (dispatch) => ({
  dispatch: {
    getProductsList: (pageCount) => dispatch(getProductsList(pageCount)),
    getFilterdProductList: (pageCount, filterPart) =>
      dispatch(getFilteredProductsList(pageCount, filterPart)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
