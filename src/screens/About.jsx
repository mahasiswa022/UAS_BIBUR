import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About Us</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Story</Text>
        <Text style={styles.sectionText}>
          Welcome to Laptop Store! We are dedicated to providing the best
          laptops for all your needs, whether it's for work, gaming, or personal
          use. Our mission is to deliver high-quality products with excellent
          customer service.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          At Laptop Store, our mission is to bring the latest technology to our
          customers at competitive prices. We believe in innovation, quality,
          and customer satisfaction. Our goal is to help you find the perfect
          laptop that suits your needs and budget.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionText}>
          Have any questions or need assistance? Feel free to reach out to us:
        </Text>
        <Text style={styles.contactText}>Email: support@laptopstore.com</Text>
        <Text style={styles.contactText}>Phone: +1 (123) 456-7890</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={{uri: 'https://example.com/storefront.jpg'}}
          style={styles.storeImage}
        />
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#6200EE',
    marginBottom: 5,
  },
  storeImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
