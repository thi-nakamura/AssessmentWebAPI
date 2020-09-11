// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.get('/v1/sateis/:searchType/:code', (req, res) => {
  
  // URLパラメータ取得
  // :指定の場合はreq.queryではなく、req.paramsで取得する
  var param_searchType = req.params.searchType; //NG req.query.searchType;
  var param_code       = req.params.code;       //NG req.query.code;
  
  var reqHeader_companyCode = req.get('companyCode');
  if (reqHeader_companyCode == undefined)
  {
    res.status(403).send();
    return;
  }
  else if (reqHeader_companyCode == "000001")
  {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.setHeader('Content-Length', '1546');
    const resData =
      {
        "searchtype":param_searchType,
        "code":param_code,
        "code":"9876543223",
        "login_id":"",
        "maker_type":"",
        "maker":"",
        "maker_etc":"",
        "car_name":"",
        "car_name_etc":"",
        "keitou_name":"",
        "regulation":"",
        "pattern":"",
        "pattern_etc":"",
        "grade":"",
        "grade_etc":"",
        "syadai_no":"",
        "mc_period":"",
        "car_era":"",
        "car_year":"",
        "car_seireki":"",
        "car_month":"",
        "door":"",
        "drive":"",
        "fuel":"",
        "engine_displacement":"",
        "transmission":"",
        "capacity":"",
        "inspection_era":"",
        "inspection_remain":"",
        "inspection_year":"",
        "inspection_ym":"",
        "inspection_month":"",
        "inspection_day":"",
        "reg_number1":"",
        "reg_number2":"",
        "reg_number3":"",
        "reg_number4":"",
        "mc":"",
        "career":"",
        "model_year":"",
        "dhlr":"",
        "distance_unit":"0",
        "distance":"",
        "fumei":"",
        "cur_meter_unit":"0",
        "cur_meter":"",
        "color":"",
        "color_change":"",
        "two_tone":"",
        "color_no":"",
        "org_color":"",
        "int_color":"",
        "sr":"",
        "leather":"",
        "multi":"",
        "aero":"",
        "psd":"",
        "camera":"",
        "tv":"",
        "rtv":"",
        "alumi":"",
        "inch":"",
        "headlight":"",
        "sound":"",
        "air_conditioner":"",
        "etc":"",
        "keyless":"",
        "spare_key":"",
        "one_owner":"",
        "maintenance":"",
        "certificate":"",
        "manual":"",
        "equipment":"",
        "figure_input_type":"0",
        "wound_sign":"",
        "exterior":"",
        "interior":"",
        "repair_point":"",
        "repair_interior_point":"",
        "repair_price":"",
        "accident":"",
        "memo_interior":"",
        "wound":"",
        "nyuuko_year":"",
        "nyuuko_month":"",
        "nyuuko_day":"",
        "satei_price1":"",
        "satei_price2":"",
        "result_recycling_price":"",
        "nyuuko_price":"",
        "satei_year":"",
        "satei_month":"",
        "satei_day":"",
        "store_name":"",
        "tanto_name":"",
        "mobile_tel":"",
        "image_num":"",
        "in_date":"2020-08-27 06:08:57",
        "last_update":"2020-08-27 06:08:57",
        "delete_flg":"0"
      }
    ;
    res.status(200).json(resData);
    return;
  }
  else
  {
    res.status(404).send();
    return;
  }
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));