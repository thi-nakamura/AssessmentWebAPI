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
  
  if (reqHeader_companyCode == undefined ||
      param_searchType      == undefined ||
      param_code            == undefined)
  {
    // パラメータエラー
    res.status(403).send();
    return;
  }
  else if (reqHeader_companyCode == "000002" &&
            (
              (param_searchType == "MC" && param_code == "20236898") ||
              (param_searchType == "SC" && param_code == "9876543210")
            )
          )
  {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    //res.setHeader('Content-Length', '1546');
    
    var BusinessDiscussionID = 12345678;
    var AssessmentId = "9876543210";
    if (param_searchType == "SC")
    {
      AssessmentId = param_code;
    }
    else
    {
      BusinessDiscussionID = Number(param_code);
    }
      
    const resData =
      {
        "BusinessDiscussionID":Number(BusinessDiscussionID),
        "AssessmentId":AssessmentId,
        "LoginID":"MP5A3",
        "ImportKbn":"0",
        "Maker_CD":1010,
        "Car_CD":"007",
        "Keito_CD":"007",
        "Model":"002",
        "Grade_CD":"001",
        "Maker_Name":"ﾄﾖﾀ",
        "Maker_Name_Other":"逆輸入車",
        "CarName":"ｱｲｼｽ",
        "CarName_Other":"逆輸入車アイシス",
        "Keito_Name":"RS系（1代目）",
        "Model_Left":"CBA",
        "Model_Right":"ANM10W",
        "Model_Other":"逆輸入車アイシス",
        "Grade":"ﾌﾟﾗﾀﾅ",
        "Grade_Other":"逆輸入車アイシス",
        "ModelNo":"12345",
        "TypeClassificationNo":"33",
        "CarNoHyphen":"DA1657876",
        "sale_period":"H.18/11/20-H.20/12/01",
        "FirstRegisterY":"1980",
        "FirstRegisterM":"09",
        "FullModel":"FULLDA1657876",
        "Length":1234,
        "Width":5678,
        "Height":8765,
        "ShapeCode1":"CP",
        "ShapeCode2":"HB",
        "DoorNum":"3",
        "DriverCode":"2",
        "FuelCode":"1",
        "HVFlg":1,
        "Displacement":1980,
        "ShiftPositionCode":"F",
        "ShiftCode":"6MT",
        "CarCapacity":"5",
        "InspectionDateY":"1980",
        "InspectionDateM":"04",
        "InspectionDateD":"30",
        "RegisterLocationCode":"135",
        "RegisterNoClass":"789",
        "RegisterNoSign":"あ",
        "RegisterNo":"7890",
        "PrevLatterPeriodCode":"1",
        "RecycleFee":123456,
        "ModelYear":2001,
        "SteeringWheelCode":"2",
        "DealerImportKbnCode":"3",
        "Car_History":"1",
        "DriveDistance":54321,
        "DriveMeterCode":"1",
        "MeterUnknownFlg":"2",
        "ChangeDistance":12345,
        "MeterCode":"1",
        "ChangeY":"2001",
        "ChangeM":"09",
        "MakerColorCd":"1F9",
        "ThemeColorCd1":"wi",
        "ThemeColorCd2":"pi",
        "ThemeColorCd3":"sv",
        "ColorChangeCode":"1",
        "OriginalColorCd":"bk",
        "InteriorColorCd":"gn",
        "Equip":[
            "01026000",
            "01027100",
            "01023000",
            "01024000",
            "01081000",
            "01082000",
            "02013000",
            "02014000",
            "02015000",
            "02016000",
            "02041000",
            "02017000",
            "02035000",
            "02037000",
            "02118000",
            "02119000",
            "02120000",
            "02038000",
            "02031000",
            "02032000",
            "02028000",
            "02116000",
            "02117000",
            "03006000",
            "03009000",
            "03010000",
            "03011000",
            "03012000",
            "03029000",
            "03045100",
            "03047100",
            "03048000",
            "03051100",
            "03059000",
            "03060000",
            "03062100",
            "04039000",
            "04040000",
            "04043100",
            "04044100",
            "04065000",
            "05069000",
            "05070000",
            "05073000",
            "05074000",
            "05075000",
            "05076000",
            "05080000",
            "05083000",
            "06085100",
            "06095100",
            "06095102",
            "06095104",
            "06095105",
            "06099100",
            "06102100",
            "06103100",
            "06104100",
            "06105100",
            "06106100",
            "06107100",
            "06108100",
            "06111000",
            "06112000",
            "06113000",
            "06114000",
            "06115000",
            "06121000",
            "07066000",
            "07122000",
            "07123000",
            "07124000",
        ],
        "WheelSize":"17",
        "ToolCode":"0",
        "JackCode":"1",
        "TmpTireCode":"9",
        "WarrantyCode":"0",
        "RecordBookCode":"1",
        "ManualFlg":"9",
        "AccidentHistoryCode":"C",
        "HailCarFlg":1,
        "FloodCarFlg":1,
        "AccidentContentNote1":"前：曲り",
        "AccidentContentNote2":"後：修正",
        "AccidentContentNote3":"左前：交換",
        "AccidentContentNote4":"左：曲り",
        "AccidentContentNote5":"左後：修正",
        "AccidentContentNote6":"右前：交換",
        "AccidentContentNote7":"右：曲り",
        "AccidentContentNote8":"右後：修正",
        "AccidentContentNote9":"横転()１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
        "ExteriorPoint":"C",
        "InteriorPoint":"B",
        "Mechanism01":"エンジン：異音",
        "Mechanism02":"エンジン：振動",
        "Mechanism03":"エンジンオイル漏れ",
        "Mechanism04":"ラジエータ：クーラント漏れ（アッパー）",
        "Mechanism05":"ラジエータ：クーラント漏れ（コア）",
        "Mechanism06":"ラジエータ：クーラント漏れ（ロア）",
        "Mechanism07":"ベルト：異音",
        "Mechanism08":"ベルト：振動",
        "Mechanism09":"マフラー：異音",
        "Mechanism10":"マフラー：ビビリ",
        "Mechanism11":"マフラー：車検非対応()１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
        "Driver01":"トランスミッション：異音",
        "Driver02":"トランスミッション：振動",
        "Driver03":"トランスミッション：変速ショック()１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８",
        "SuspensionSystem01":"足廻り：ブーツ破れ",
        "SuspensionSystem02":"足廻り：ショック抜け",
        "SuspensionSystem03":"足廻り：エアサス抜け",
        "SuspensionSystem04":"下回りサビ：あり",
        "SuspensionSystem05":"ドライブシャフトブーツ破れ：なし",
        "SuspensionSystem06":"ロックボルト：あり",
        "SuspensionSystem07":"レンチアダプター：あり()１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
        "ElectricEquip01":"ナビ不良",
        "ElectricEquip02":"オーディオ不良",
        "ElectricEquip03":"ＰＷ不良：左前",
        "ElectricEquip04":"ＰＷ不良：左",
        "ElectricEquip05":"ＰＷ不良：左後",
        "ElectricEquip06":"ＰＷ不良：右前",
        "ElectricEquip07":"ＰＷ不良：右",
        "ElectricEquip08":"ＰＷ不良：右後",
        "ElectricEquip09":"ＰＷ不良：全部()１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
        "CustomerSaleReasonKbn":"1",
        "CustomerSaleDateY":"2021",
        "CustomerSaleDateM":"09",
        "CustomerSaleDateD":"07",
        "SellingPoint01":"展示車未使用",
        "SellingPoint02":"保管場所：屋根付き駐車場",
        "SellingPoint03":"保管場所：舗装済み駐車場",
        "SellingPoint04":"使用状況：通勤",
        "SellingPoint05":"使用状況：週末レジャー",
        "SellingPoint06":"使用状況：近隣の買い物",
        "SellingPoint07":"ペット使用歴なし",
        "SellingPoint08":"雪国走行なし",
        "SellingPoint09":"ボディコーティング済み",
        "SellingPoint10":"定期メンテナンス済み",
        "SellingPoint11":"その他：＊＊＊＊()１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよらりるれろわいうえを１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよらりるれろわいうえを１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよらりるれろわいうえを",
        "ConveyNote":"ワンプラ落札車",
        "PresentedAmount":"50000",
        "CompetitorName":"株式会社NEUTRUS",
        "CustomerHopeSaleAmount":"希望金額：100,000円()１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
        "SpecialNote01":"フロントガラス：亀裂 200mm",
        "SpecialNote02":"フロントガラス：チップ 15箇所",
        "SpecialNote03":"車検不可車輌",
        "SpecialNote04":"タイヤはみ出し",
        "SpecialNote05":"ウインドウフィルム",
        "SpecialNote06":"最低地上高",
        "SpecialNote07":"小径ハンドル",
        "SpecialNote08":"車検非対応社外マフラー",
        "SpecialNote09":"特別値引き不可",
        "SpecialNote10":"アクア",
        "SpecialNote11":"所有権：有()１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
        "InsertDate":"2020/09/01 00:00:00",
        "UpdateDate":"2020/09/02 09:05:03",
        "DeleteFlag":"0"
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