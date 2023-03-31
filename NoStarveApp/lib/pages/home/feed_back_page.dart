import 'package:flutter/material.dart';

import 'home_screen.dart';

class FeedBackPageUI extends StatelessWidget {
  FeedBackPageUI({Key? key}) : super(key: key);
  final Color firstColor = const Color.fromARGB(133, 30, 62, 1);
  final Color secondColor = const Color.fromARGB(5, 30, 62, 1);
  final mssgController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Stack(
              children: [
                ClipPath(
                  clipper: MyClipper(),
                  child: Container(
                    width: double.infinity,
                    height: 350,
                    decoration: BoxDecoration(
                        gradient:
                            LinearGradient(colors: [firstColor, secondColor]),
                        boxShadow: const [
                          BoxShadow(
                              color: Color.fromARGB(255, 107, 126, 252),
                              blurRadius: 12,
                              offset: Offset(0, 0))
                        ]),
                  ),
                ),
                Positioned(
                    top: 50,
                    left: 25,
                    child: Text(
                      'FeedBack',
                      style: TextStyle(color: Colors.white, fontSize: 25),
                    )),
                const Positioned(
                    top: 80,
                    left: 25,
                    child: Text(
                      'We would love to hear your feedback',
                      style: TextStyle(fontSize: 18.0, color: Colors.white),
                    )),
                const Positioned(
                    top: 100,
                    left: 25,
                    child: Text(
                      'Share your thoughts here',
                      style: TextStyle(fontSize: 18.0, color: Colors.white),
                    )),
                const Positioned(
                    top: 140,
                    left: 25,
                    child: CircleAvatar(
                        radius: 50,
                        backgroundColor: Colors.white60,
                        foregroundImage: AssetImage('assets/icons/logo.png'))),
              ],
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 8.0),
                  child: Text(
                    'Tell us how we can improve',
                    style: TextStyle(color: Colors.black, fontSize: 18.0),
                  ),
                ),
                Row(
                  children: <Widget>[
                    Expanded(
                        child: Container(
                      margin: EdgeInsets.symmetric(horizontal: 8.0),
                      height: 150,
                      decoration: BoxDecoration(
                        color: Colors.grey.shade200,
                      ),
                      child: TextField(
                        controller: mssgController,
                        style:
                            const TextStyle(color: Colors.black, fontSize: 15),
                        maxLines: 10,
                        decoration: const InputDecoration(
                          errorText: 'Must not be null',
                          hintText: 'Write here..',
                        ),
                      ),
                    ))
                  ],
                ),
                const Center(
                  child: Text(
                    'How would You Rate Our App',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(
                      5,
                      (index) => IconButton(
                          onPressed: () {},
                          icon: Icon(
                            Icons.star_border_outlined,
                            color: Color.fromARGB(255, 107, 126, 252),
                            size: 32,
                          ))),
                ),
                SizedBox(
                  height: 5,
                ),
                Center(
                  child: Container(
                    width: 150,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      color: Color.fromARGB(255, 107, 126, 252),
                    ),
                    child: MaterialButton(
                      onPressed: () {
                        Navigator.push(context, MaterialPageRoute(
                          builder: (context) {
                            return MainScreenPage();
                          },
                        ));
                      },
                      child: Text(
                        'Send Now',
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}

class MyClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    var path = Path();
    path.lineTo(0, size.height - 70);
    path.quadraticBezierTo(
        size.width / 2, size.height, size.width, size.height - 300);
    path.lineTo(size.width, 0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(CustomClipper<Path> oldClipper) {
    // TODO: implement shouldReclip
    return false;
  }
}
