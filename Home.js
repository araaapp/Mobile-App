import React from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const friends = [
  { id: '1', name: 'Ages Gelar Pangestu', hp: '085724768850', nim: '2230511047', email: 'agesgelar7@gmail.com' },
  { id: '2', name: 'Gibran Genta Rabbani', hp: '081382929054', nim: '2230511048', email: 'gibrangentarabbani@gmail.com' },
  { id: '3', name: 'M Farel Abdillah', hp: '087701359915', nim: '2230511049', email: 'farelabdillah2016@gmail.com' },
  { id: '4', name: 'Fajar Budiman', hp: '085758225942', nim: '2230511050', email: 'fbudiman880@gmail.com' },
  { id: '5', name: 'Moh Abdi Hafidz Fadilah', hp: '085732146196', nim: '2230511051', email: 'abdihafidz340@gmail.com' },
  { id: '6', name: 'Rizky Maulana Yusuf', hp: '081388946480', nim: '2230511054', email: 'rizkymaulanayusuf1945@gmail.com' },
  { id: '7', name: 'Eri Zulfan Diwani', hp: '085795769727', nim: '2230511055', email: 'eizul44@gmail.com' },
  { id: '8', name: 'Silvy Denia Putri', hp: '085694956417', nim: '2230511056', email: 'silvydenia402@gmail.com' },
  { id: '9', name: 'Raka Wahyu Sagara', hp: '081219852211', nim: '2230511057', email: 'rakaws122@gmail.com' },
  { id: '10', name: 'Nur Insan Subekti', hp: '081316742795', nim: '2230511058', email: 'nurinsan2712@gmail.com' },
  { id: '11', name: 'Fauzia Nurafni', hp: '0895809245080', nim: '2230511059', email: 'fauzianurafni026@gmail.com' },
  { id: '12', name: 'Hanif Imam Muntazhar', hp: '083894443344', nim: '2230511060', email: 'hanifimam2001@gmail.com' },
  { id: '13', name: 'Asri Nur Kholidah', hp: '085721552296', nim: '2230511062', email: 'asrinurkholidah@gmail.com' },
  { id: '14', name: 'Restu Gede Purnama', hp: '081383372981', nim: '2230511063', email: 'restumelenoy83@gmail.com' },
  { id: '15', name: 'Maulana Ifnu Syafi', hp: '081563890525', nim: '2230511064', email: 'ifnusyafi@gmail.com' },
  { id: '16', name: 'Nadia Putri Rahmawati', hp: '081281172165', nim: '2230511065', email: 'nadiaputrirahman@gmail.com' },
  { id: '17', name: 'Rafdy Fauzan Ilham Firdaus', hp: '085174210937', nim: '2230511066', email: 'rafdyfauzan57@gmail.com' },
  { id: '18', name: 'Muhammad Fadlan Syuhada', hp: '083893026231', nim: '2230511067', email: 'mfadlan703@gmail.com' },
  { id: '19', name: 'Arip', hp: '08980520407',  nim: '2230511068', email: 'arifsuanto3@gmail.com' },
  { id: '20', name: 'Arya Pangestu', hp: '081317706229', nim: '2230511069', email: 'fbudiman880@gmail.com' },
  { id: '21', name: 'Mohammad Samani Kamil', hp: '085794306200', nim: '2230511071', email: 'samanikamil2@gmail.com' },
  { id: '22', name: 'Luthfi Fauzan Achmad', hp: '085862354347', nim: '2230511073', email: 'lfachmad28@gmail.com' },
  { id: '23', name: 'Syalwa Fida Wifa', hp: '085524850478', nim: '2230511074', email: 'fidawifa@gmail.com' },
  { id: '24', name: 'Feri Irawan', hp: '085793902926', nim: '2230511075', email: 'feri186irawan@gmail.com' },
  { id: '25', name: 'M. Arizki', hp: '0895405944337', nim: '2230511076', email: 'muhammadarizky8215@gmail.com' },
  { id: '26', name: 'Moh. Rizki Maulana', hp: '081399921489', nim: '2230511077', email: 'rizkim0716@gmail.com' },
  { id: '27', name: 'M Utama Luhur Budhy', hp: '089630461568', nim: '2230511079', email: 'noobberkarya123@gmail.com' },
  { id: '28', name: 'Reiza Maulidia Senjaya', hp: '081315171380', nim: '2230511080', email: 'reizasenjaya5@gmail.com' },
  { id: '29', name: 'Ferri Ekalaya', hp: '081316617086', nim: '2230511082', email: 'feriekalaya@gmail.com' },
  { id: '30', name: 'Putri Aulia Maulida', hp: '085216643396', nim: '2230511083', email: 'ptriauliamlda9@gmail.com' },
  { id: '31', name: 'Carol Dwi Putra', hp: '081310785303', nim: '2230511084', email: 'caroldwyne@gmail.com' },
  { id: '32', name: 'Muhamad Fakhri Khairil Imam', hp: '082258988952', nim: '2230511085', email: 'muhammadfakhri.kh22@gmail.com' },
  { id: '33', name: 'Alma Sakhiragama Khairunisa', hp: '082377599105', nim: '2230511086', email: 'almasakhiragamakhairunisa@gmail.com' },
  { id: '34', name: 'Nazmi Maulana Fauzan', hp: '085219871636', nim: '2230511087', email: 'nazmimaulanaf27@gmail.com' },
  { id: '35', name: 'Muhammad George Elmar', hp: '0895360539307', nim: '2230511088', email: 'georgejos79z@gmail.com' },
  { id: '36', name: 'M Sachran Almiqdad FR', hp: '085721337825', nim: '2230511089', email: 'sahranalmiqdad8@gmail.com' },
  { id: '37', name: 'Dhiya Jauhar Akmal', hp: '087805761574', nim: '2230511092', email: 'dhiyajauharakmal@gmail.com' },
  { id: '38', name: 'Muhammad Faisal Rafli', hp: '087703647543', nim: '2230511093', email: 'faisalrafli52@gmail.com' },
  { id: '39', name: 'Fino Falentino', hp: '085798806252', nim: '2230511095', email: 'finofalentino114@gmail.com' },
  // Tambahkan teman lainnya di sini
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Daftar Teman</Text>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.name} />
            <Card.Actions>
              <Button onPress={() => navigation.navigate('About',{ friend: item })}>Lihat</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    marginBottom: 10,
    elevation: 3, // Untuk Android
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
    }),
  },
});
