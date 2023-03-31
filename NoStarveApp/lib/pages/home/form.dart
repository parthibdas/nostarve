import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../widgets/dimensions.dart';

class MyForm extends StatefulWidget {
  const MyForm({super.key});

  @override
  State<MyForm> createState() => _MyFormState();
}

class _MyFormState extends State<MyForm> {
  var _myFormKey = GlobalKey<FormState>();
  String name = "";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Please fill up the details")),
      body: Container(
        color: Color.fromARGB(153, 252, 226, 226),
        padding: EdgeInsets.symmetric(vertical: 25.0, horizontal: 25.0),
        child: Form(
            key: _myFormKey,
            child: Column(
              children: <Widget>[
                TextFormField(
                  decoration: InputDecoration(
                      labelText: "Name", hintText: "Enter your name"),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return "Enter Correct Name";
                    } else {
                      return null;
                    }
                  },
                ),
                SizedBox(
                  height: 3.0,
                ),
                TextFormField(
                  decoration: InputDecoration(
                    labelText: "Address",
                    hintText: "Enter your Address",
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return "Enter Correct Address";
                    } else {
                      return null;
                    }
                  },
                ),
                SizedBox(
                  height: 3.0,
                ),
                TextFormField(
                  decoration: InputDecoration(
                      labelText: "Contact number",
                      hintText: "Enter your contact number"),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return "Enter Correct phone number";
                    } else {
                      return null;
                    }
                  },
                ),
              ],
            )),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.done),
        onPressed: () {
          // _myFormKey.currentState?.validate();
          // Navigator.pop(context);
          if (_myFormKey.currentState!.validate()) {
            Navigator.pop(context);
          }
        },
      ),
    );
  }
}
