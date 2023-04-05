import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  _ProfileState createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  final uid = FirebaseAuth.instance.currentUser!.uid;
  final email = FirebaseAuth.instance.currentUser!.email;
  final creationTime = FirebaseAuth.instance.currentUser!.metadata.creationTime;

  User? user = FirebaseAuth.instance.currentUser;
  verifyEmail() async {
    if (user != null && !user!.emailVerified) {
      await user!.sendEmailVerification();
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          backgroundColor: Colors.orangeAccent,
          content: Text(
            "Verification email has been sent!",
            style: TextStyle(fontSize: 18.0, color: Colors.black),
          )));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
        child: Column(
          children: [
            Text(
              'User ID: $uid',
              style: TextStyle(fontSize: 18.0),
            ),
            Row(
              children: <Widget>[
                Text(
                  'Email: $email',
                  style: TextStyle(fontSize: 18.0),
                ),
              ],
            ),
            user!.emailVerified
                ? Text(
                    "Verified",
                    style: TextStyle(fontSize: 18.0, color: Colors.blueGrey),
                  )
                : TextButton(
                    onPressed: () => {
                          verifyEmail(),
                        },
                    child: Text('Verify Email')),
            Text(
              'Created: $creationTime',
              style: TextStyle(fontSize: 18.0),
            )
          ],
        ));
  }
}
