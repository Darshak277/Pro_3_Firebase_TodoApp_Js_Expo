import { AntDesign } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import colors from "./Colors";
import tempData from "./tempData";
import TodoList from "./components/TodoList";
import React, { useEffect, useState } from "react";
import AddListModal from "./components/AddListModal";

// export default class App extends React.Component {
//   state = {
//     addTodoVisible: false,
//     lists: tempData,
//   };

//   toggleAddTodoModal() {
//     this.setState({ addTodoVisible: !this.state.addTodoVisible });
//   }

//   renderList = (list) => {
//     return <TodoList list={list} />;
//   };

//   addList = (list) => {
//     // console.log({ ...list, id: lists.length + 1, todos: []})
//     // console.log([ ...lists, { ...list, id: lists.length + 1, todos: []} ])
//     this.setState({
//       lists: [
//         ...this.state.lists,
//         { ...list, id: this.state.lists.length + 1, todos: [] },
//       ],
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Modal
//           animationType="slide"
//           visible={this.state.addTodoVisible}
//           onRequestClose={() => this.toggleAddTodoModal}
//         >
//           <AddListModal closeModal={() => this.toggleAddTodoModal} addList ={()=> this.addList()} />
//         </Modal>
//         <View style={{ flexDirection: "row" }}>
//           <View style={styles.divider} />
//           <Text style={styles.title}>
//             Todo
//             <Text style={{ fontWeight: "800", color: colors.blue }}>Lists</Text>
//           </Text>
//           <View style={styles.divider} />
//         </View>
//         <View style={{ marginVertical: 48 }}>
//           <TouchableOpacity
//             style={styles.addList}
//             onPress={() => this.toggleAddTodoModal()}
//           >
//             <AntDesign name="plus" size={16} color={colors.blue} />
//           </TouchableOpacity>
//           <Text style={styles.add}>Add List</Text>
//         </View>

//         <View style={{ height: 275, paddingLeft: 32 }}>
//           <FlatList
//             data={this.state.lists}
//             keyExtractor={(item) => item.name}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             renderItem={({ item }) => this.renderList(item)}
//           />
//         </View>
//       </View>
//     );
//   }
// }

export default function App() {
  const [addTodoVisible, setAddTodoVisible] = useState(false);
  const [lists, setLists] = useState(tempData);
  const toggleAddTodoModal = () => {
    setAddTodoVisible(!addTodoVisible);
  };

  const renderList = (list) => {
    return <TodoList list={list} updateList={updateList} />;
  };

  const addList = (list) => {
    console.log([...lists, { ...list, id: lists.length + 1, todos: [] }]);
    // setLists([ ...lists, { ...list, id: lists.length + 1, todos: []} ]);
  };

  const updateList = (list) => {};

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={addTodoVisible}
        onRequestClose={toggleAddTodoModal}
      >
        <AddListModal closeModal={toggleAddTodoModal} addList={addList} />
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo
          <Text style={{ fontWeight: "800", color: colors.blue }}>Lists</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.addList} onPress={toggleAddTodoModal}>
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>

      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderList(item)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.black,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
