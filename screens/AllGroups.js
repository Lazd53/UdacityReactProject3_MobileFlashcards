import * as React from 'react';
import { StyleSheet, Text, Button, View, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Import Components
import NavBtn from '../components/NavBtn';
import GroupControls from '../components/GroupControls';

class AllGroups extends React.Component {

  navigateToAddGroup = () => {
    const { navigation } = this.props;
    navigation.navigate('AddGroup');
  }

  render(){
    const { navigation } = this.props
    const allGroups = {
      math: {
        title: "Math"
      },
      science: {
        title: "Science"
      },
      technology: {
        title: "Technology"
      },
      fakeNews: {
        title: "Fake News"
      }
    }

    const keys = Object.keys(allGroups);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewStyling}>
          <View style={styles.groupsContainer}>
            <GroupControls navigation={navigation} title={allGroups.math.title}/>
            <GroupControls navigation={navigation} title={allGroups.science.title}/>
            <GroupControls navigation={navigation} title={allGroups.technology.title}/>
            <GroupControls navigation={navigation} title={allGroups.fakeNews.title}/>
          </View>
        </ScrollView>
        <NavBtn text="Add a Group" callback={this.navigateToAddGroup}/>
      </View>
    );
  }
}

export default AllGroups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollViewStyling: {
    flex: 1,
    width: "70%",
    marginBottom: 20
  },
  groupsContainer: {
  }
});
