import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:no_starve/controllers/product_controller.dart';
import 'package:no_starve/pages/home/feed_back_page.dart';
import 'package:no_starve/pages/home/form.dart';
import 'package:no_starve/pages/home/home_screen.dart';

import 'package:no_starve/pages/home/register.dart';
import 'package:no_starve/pages/others/details.dart';
import 'helper/dependencies.dart' as dep;
import 'package:http/http.dart' as http;
import 'package:form_validator/form_validator.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dep.init();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    Get.find<PopularProductController>().getPopularProductList();
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'NoStarve',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: Register(),
    );
  }
}
