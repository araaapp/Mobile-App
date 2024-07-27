import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './components/styles';


const catFoodProducts = [
  {
    id: 1,
    title: 'Bolt Tuna Cat Food',
    description: 'Makanan kucing yang lezat dan bergizi untuk kucing dewasa.',
    price: 244000,
    image: 'https://cppetindo.com/wp-content/uploads/WEB-bolt-cat-ungu-8kg.png',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Standar',
  },
  {
    id: 2,
    title: 'Me-O Dry Cat Food',
    description: 'Makanan kucing kering tinggi protein untuk kucing dalam ruangan.',
    price: 74000,
    image: 'https://img.lazcdn.com/g/p/477c11868b3a3a84de22d02c59077140.jpg_720x720q80.jpg',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Ekspres',
  },
  {
    id: 3,
    title: 'Whiskas Dry Food',
    description: 'Makanan kucing basah alami yang terbuat dari daging asli.',
    price: 98000,
    image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/17/6f480c29-e7d0-4e33-a76b-cb899e292005.jpg',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Standar',
  },
  {
    id: 4,
    title: 'Royal Canin Indoor Adult',
    description: 'Makanan kucing kering bebas biji untuk diet sehat dan seimbang.',
    price: 70500,
    image: 'https://res.cloudinary.com/ruparupa-com/image/upload//f_auto,q_auto:eco/v1638163094/Products/10108034_1.jpg',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Ekspres',
  },
  {
    id: 5,
    title: 'Nature Bridge Beauty Cat Food',
    description: 'Makanan kucing kering bebas biji untuk diet sehat dan seimbang.',
    price: 232500,
    image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-50672525/brd-60517_nature-bridge-beauty-cat-food-for-all-stages-1-5kg-makanan-kucing_full01.jpg',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Ekspres',
  },
  {
    id: 6,
    title: 'Happy Cat Minkas Perfect Mix',
    description: 'Happy Cat Minkas Perfect Mix mengandung nutrisi seimbang yang memadukan daging unggas, domba, dan ikan dengan rasa lezat.',
    price: 148800,
    image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/105/MTA-136565096/no-brand_no-brand_full01.jpg',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Ekspres',
  },
  {
    id: 7,
    title: 'FRISKIES Adult Seafood Sensation',
    description: 'FRISKIES Adult Seafood Sensation tinggi nutrisi yang lengkap dan seimbang untuk pertumbuhan kucing dewasa dengan kelezatan sensasi rasa ikan laut.',
    price: 30500,
    image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/4/2bcfbd03-d8e8-4d50-9524-73407146c22d.png',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Ekspres',
  },
  {
    id: 8,
    title: 'PRO PLAN Adult',
    description: 'Produk ini memiliki formulasi daging salmon asli sebagai bahan baku utama dan diperkaya probiotik untuk mendukung kesehatan pencernaan kucing Anda.',
    price: 272000,
    image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//743/proplan_proplan-adult-salmon-2-5-kg_full02.jpg',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Ekspres',
  },
  {
    id: 9,
    title: ' Royal Canin Kitten Persian',
    description: 'Makanan untuk anak kucing persia yang memiliki formula khusus. Makanan ini mudah dicerna dengan kualitas yang baik. ',
    price: 310000,
    image: 'https://petshopindonesia.com/wp-content/uploads/2022/12/FBN-Persian-Kitten-Hero-1.jpg',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Ekspres',
  },
  {
    id: 10,
    title: 'Felibite Mother and Kitten',
    description: 'Felibite Mother and Kitten adalah memiliki formulasi dengan nutrisi seimbang yang bisa meningkatkan stamina dan kekebalan tubuh anak kucing.',
    price: 17500,
    image: 'https://d2qjkwm11akmwu.cloudfront.net/products/100893_15-4-2021_15-55-31-1665824660.webp',
    category: 'Makanan Kucing',
    shipping: 'Pengiriman Ekspres',
  },
];

  const petshopLogo = require('./assets/pet-shop.png');

  const banks = [
    { name: 'Bank BCA', logo: 'https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Bank-BCA-1.png' },
    { name: 'Bank BRI', logo: 'https://i.pinimg.com/originals/26/b1/d5/26b1d5503605789d2cbd551704f5c948.jpg' },
    { name: 'Bank BJB', logo: 'https://png.pngtree.com/png-clipart/20221227/original/pngtree-bjb-bank-logo-png-image_8812672.png' },
    { name: 'Bank Mandiri', logo: 'https://leoagung.or.id/gallery/images/bank-mandiri-logo.md.png' },
    { name: 'Bank BSI', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXETz1mp53jrz5PrBYXIRj5hC5lUba1kFg7g&s' }
  ];

  const eWallets = [
    { name: 'Shopeepay', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuictAQpWwWd6u9EaggLdwI0_PPf74PSOig&s' },
    { name: 'GOPAY', logo: 'https://crm.thetempogroup.com/api/v1/media/product_image/image/6' },
    { name: 'OVO', logo: 'https://oatekno.com/wp-content/uploads/2022/12/cara-cek-history-transaksi-OVO.jpg' },
    { name: 'DANA', logo: 'https://i.pinimg.com/originals/f5/8c/a3/f58ca3528b238877e9855fcac1daa328.jpg' },
    { name: 'Link Aja', logo: 'https://i0.wp.com/ifnfintech.com/wp-content/uploads/2020/10/linkaja.png?fit=322%2C150&ssl=1' }
  ];

  const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const [paymentDetailVisible, setPaymentDetailVisible] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedEWallet, setSelectedEWallet] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = catFoodProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageClick = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const handleBuyClick = () => {
    setModalVisible(false);
    setPaymentVisible(true);
  };

  const handlePaymentOptionClick = (method) => {
    setPaymentMethod(method);
    setSelectedOption(null);
    setSelectedBank(null);
    setSelectedEWallet(null);
    setAccountNumber('');
    setAmount('');
    setPlaceholderText(method === 'M-Banking' ? 'Masukkan Nomor Rekening' : 'Masukkan Nomor E-Wallet');
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (paymentMethod === 'M-Banking') {
      setSelectedBank(option);
    } else {
      setSelectedEWallet(option);
    }
  };

  

  const handlePaymentSubmit = () => {
  // Menghitung harga produk yang sudah dipilih
  const productPrice = selectedProduct.price;
  // Mengonversi amount ke integer
  const enteredAmount = parseInt(amount.replace(/\D/g, ''), 10);

  if (enteredAmount === productPrice) {
    const details = {
      method: paymentMethod === 'M-Banking' ? selectedBank.name : selectedEWallet.name,
      accountNumber,
      amount,
      product: selectedProduct,
    };
    setPaymentDetails(details);
    setPaymentVisible(false);
    setPaymentDetailVisible(true);
  } else {
    alert('Jumlah nominal yang anda masukkan tidak sesuai, harap coba kembali.');
  }
};

  const PaymentOptions = ({ options }) => (
    <ScrollView>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.paymentOptionButton}
          onPress={() => handleOptionClick(option)}
        >
          <Image source={{ uri: option.logo }} style={styles.paymentOptionLogo} />
          <Text style={styles.paymentOptionText}>{option.name}</Text>
          <Text style={styles.paymentOptionArrow}>&gt;</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const ProductItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => handleImageClick(item)}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>Rp.{item.price.toLocaleString('id-ID')}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={petshopLogo} style={styles.logo} />
        <Text style={styles.shopName}>PET SHOP & Care</Text>
        <Text style={styles.subtitle}>Jual Beli Makanan Kucing</Text>
      </View>
      <Text style={styles.pageTitle}>Home</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari produk..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ProductItem}
      />
      {selectedProduct && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Image source={{ uri: selectedProduct.image }} style={styles.image} />
              <Text style={styles.detailText}>Nama produk: {selectedProduct.title}</Text>
              <Text style={styles.detailText}>Merk: {selectedProduct.category}</Text>
              <Text style={styles.detailText}>Tipe: {selectedProduct.description}</Text>
              <Text style={styles.detailText}>Harga: Rp.{selectedProduct.price.toLocaleString('id-ID')}</Text>
              <Text style={styles.detailText}>Ekspedisi: {selectedProduct.shipping}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                  style={[styles.button, { flex: 1, marginRight: 10 }]}
                  onPress={() => alert('Detail Produk')}
                >
                  <Text style={styles.buttonText}>Detail Produk</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { flex: 1, marginLeft: 10 }]}
                  onPress={handleBuyClick}
                >
                  <Text style={styles.buttonText}>Beli</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={[styles.backButton, { marginTop: 10 }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      {paymentVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={paymentVisible}
          onRequestClose={() => {
            setPaymentVisible(!paymentVisible);
            setPaymentMethod(null);
            setSelectedOption(null);
            setSelectedBank(null);
            setSelectedEWallet(null);
            setAccountNumber('');
            setAmount('');
          }}
        >
          <View style={styles.modal}>
            <View style={styles.paymentContainer}>
              {!paymentMethod ? (
                <>
                  <Text style={styles.paymentTitle}>Pilih Metode Pembayaran:</Text>
                  <TouchableOpacity
                    style={styles.paymentButton}
                    onPress={() => handlePaymentOptionClick('M-Banking')}
                  >
                    <Text style={styles.paymentButtonText}>Transfer M-Banking</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.paymentButton}
                    onPress={() => handlePaymentOptionClick('E-Wallet')}
                  >
                    <Text style={styles.paymentButtonText}>E-Wallet</Text>
                  </TouchableOpacity>
                </>
              ) : !selectedOption ? (
                <>
                  <Text style={styles.paymentTitle}>Pilih Bank atau E-Wallet:</Text>
                  <PaymentOptions options={paymentMethod === 'M-Banking' ? banks : eWallets} />
                </>
              ) : (
                <>
                  <Text style={styles.paymentTitle}>Konfirmasi Pembayaran:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder={placeholderText}
                    value={accountNumber}
                    onChangeText={setAccountNumber}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Masukkan Jumlah Nominal"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                  />
                  <TouchableOpacity
                    style={styles.paymentButton}
                    onPress={handlePaymentSubmit}
                  >
                    <Text style={styles.paymentButtonText}>Bayar</Text>
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity
                style={[styles.backButton, { marginTop: 10 }]}
                onPress={() => {
                  setPaymentVisible(false);
                  setPaymentMethod(null);
                  setSelectedOption(null);
                  setSelectedBank(null);
                  setSelectedEWallet(null);
                  setAccountNumber('');
                  setAmount('');
                }}
              >
                <Text style={styles.buttonText}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      {paymentDetailVisible && paymentDetails && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={paymentDetailVisible}
          onRequestClose={() => setPaymentDetailVisible(false)}
        >
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.detailText}><h2>Detail Pembayaran:</h2></Text>
              <Text style={styles.detailText}>Metode Pembayaran: {paymentDetails.method}</Text>
              <Text style={styles.detailText}>Nomor Akun: {paymentDetails.accountNumber}</Text>
              <Text style={styles.detailText}>Jumlah Nominal: Rp.{parseInt(paymentDetails.amount).toLocaleString('id-ID')}</Text>
              <Text style={styles.detailText}>Nama produk: {paymentDetails.product.title}</Text>
              <Text style={styles.detailText}>Merk: {paymentDetails.product.category}</Text>
              <Text style={styles.detailText}>Harga: Rp.{paymentDetails.product.price.toLocaleString('id-ID')}</Text>
              <Text style={styles.detailText}>Ekspedisi: {paymentDetails.product.shipping}</Text>

              {/* Ikon Centang Hijau */}
              <View style={styles.checkmarkContainer}>
              <Icon name="check" size={30} color="green" />
              <Text style={[styles.detailText, { color: 'green', marginLeft: 10 }]}>Pembayaran Berhasil!</Text>
              </View>
              <TouchableOpacity
                style={[styles.backButton, { marginTop: 10 }]}
                onPress={() => setPaymentDetailVisible(false)}
              >
                <Text style={styles.buttonText}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default App;
