
var cc = DataStudioApp.createCommunityConnector();
var dateFrom = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd");
var dateTo = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd");
/**
 * function  `getAuthType()`
 *
 * @returns {Object} `AuthType` used by the connector.
 */
// https://developers.google.com/datastudio/connector/reference#getauthtype
function getAuthType() {
  var AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.NONE)
    .build();
}

/**
 * function  `isAdminUser()`
 *
 * @returns {Boolean} Currently just returns false. Should return true if the current authenticated user at the time
 *                    of function execution is an admin user of the connector.
 */
function isAdminUser() {
  return true;
}


/**
 * Returns the user configurable options for the connector.
 *
 * Required function for Community Connector.
 *
 * @param   {Object} request  Config request parameters.
 * @returns {Object}          Connector configuration to be displayed to the user.
 */
function getConfig(request) {
  var cc = DataStudioApp.createCommunityConnector();
  var config = cc.getConfig();
  var dateFrom = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd");
  var dateTo = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd");

  config
    .newInfo()
    .setId('instructions')
    .setText('Fill out the form to connect to a JSON data source.');



  config
    .newTextInput()
    .setId('dateFrom')
    .setName('Enter start date')
    .setHelpText('2022-12-31')
    .setPlaceholder(dateFrom)

  config
    .newTextInput()
    .setId('dateTo')
    .setName('Enter end date')
    .setHelpText('2022-12-31')
    .setPlaceholder(dateTo)
  
  config
    .newTextInput()
    .setId('apiKey')
    .setName('Enter API token')
    .setHelpText('MYAPITOKEN')
    .setPlaceholder('MYAPITOKEN')


  config.setDateRangeRequired(false);

  return config.build();
}

function getFields() {
  var cc = DataStudioApp.createCommunityConnector();
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields
    .newDimension()
    .setId('id')
    .setName('ID')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('campaign_id')
    .setName('Campaign ID')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('offer_id')
    .setName('Offer ID')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('source_id')
    .setName('Source ID')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('program_id')
    .setName('Program ID')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('landing_id')
    .setName('Landing ID')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('prelanding_id')
    .setName('Prelanding ID')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('clickid')
    .setName('Click ID')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('campaign')
    .setName('Campaign')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('offer')
    .setName('Offer')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('source')
    .setName('Source')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('network')
    .setName('Network')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('landing')
    .setName('Landing')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('prelanding')
    .setName('Prelanding')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('country')
    .setName('Country')
    .setType(types.COUNTRY_CODE);

  fields
    .newDimension()
    .setId('city')
    .setName('City')
    .setType(types.CITY);

  fields
    .newDimension()
    .setId('os')
    .setName('OS')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('browser')
    .setName('Browser')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('device')
    .setName('Device')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('device_brand')
    .setName('Device brand')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('device_fullname')
    .setName('Device fullname')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('isp')
    .setName('ISP')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('connection_type')
    .setName('Connection type')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('user_agent')
    .setName('User agent')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('ip')
    .setName('IP')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('postback_ip')
    .setName('Postback IP')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('referer')
    .setName('Referer')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('Page')
    .setName('Page')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('is_transaction')
    .setName('Is transaction')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type')
    .setName('Type')
    .setType(types.TEXT);

  fields
      .newDimension()
      .setId("payout")
      .setName("payout")
      .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('payout_network')
    .setName('Payout Network')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('payout_default')
    .setName('Payout Default')
    .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('currency')
    .setName('Currency')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('cost')
    .setName('Cost')
    .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('cost_source')
    .setName('Cost Source')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('cost_default')
    .setName('Cost Default')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('status')
    .setName('Status')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('track_time')
    .setName('Track Time')
    .setType(types.YEAR_MONTH_DAY_SECOND);
  
  fields
    .newDimension()
    .setId('conv_time')
    .setName('Conversoin time')
    .setType(types.YEAR_MONTH_DAY_SECOND);

  fields
    .newDimension()
    .setId('created_at')
    .setName('Created at')
    .setType(types.YEAR_MONTH_DAY_MINUTE);

  fields
    .newDimension()
    .setId('ref_id')
    .setName('Ref id')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('event')
    .setName('Event')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('p_sub1')
    .setName('p_sub1')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub2')
    .setName('p_sub2')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub3')
    .setName('p_sub3')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub4')
    .setName('p_sub4')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('p_sub5')
    .setName('p_sub5')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub6')
    .setName('p_sub6')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub7')
    .setName('p_sub7')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub8')
    .setName('p_sub8')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('p_sub9')
    .setName('p_sub9')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub10')
    .setName('p_sub10')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub11')
    .setName('p_sub11')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub12')
    .setName('p_sub12')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('p_sub13')
    .setName('p_sub13')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub14')
    .setName('p_sub14')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub15')
    .setName('p_sub15')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub16')
    .setName('p_sub16')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('p_sub17')
    .setName('p_sub17')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub18')
    .setName('p_sub18')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('p_sub19')
    .setName('p_sub19')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('p_sub20')
    .setName('p_sub20')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('fingerprint')
    .setName('fingerprint')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('coupon')
    .setName('coupon')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('deduplicate_token')
    .setName('deduplicate_token')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub1')
    .setName('sub1')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub2')
    .setName('sub2')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('sub3')
    .setName('sub3')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub4')
    .setName('sub4')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub5')
    .setName('sub5')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('sub6')
    .setName('sub6')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub7')
    .setName('sub7')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub8')
    .setName('sub8')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('sub9')
    .setName('sub9')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub10')
    .setName('sub10')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub11')
    .setName('sub11')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('sub12')
    .setName('sub12')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub13')
    .setName('sub13')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub14')
    .setName('sub14')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('sub15')
    .setName('sub15')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub16')
    .setName('sub16')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub17')
    .setName('sub17')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('sub18')
    .setName('sub18')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub19')
    .setName('sub19')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('sub20')
    .setName('sub20')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('type1')
    .setName('type1')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type2')
    .setName('type2')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type3')
    .setName('type3')
    .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('type4')
    .setName('type4')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type5')
    .setName('type5')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type6')
    .setName('type6')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type7')
    .setName('type7')
    .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('type8')
    .setName('type8')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type9')
    .setName('type9')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type10')
    .setName('type10')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type11')
    .setName('type11')
    .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('type12')
    .setName('type12')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type13')
    .setName('type13')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type14')
    .setName('type14')
    .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('type15')
    .setName('type15')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type16')
    .setName('type16')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type17')
    .setName('type17')
    .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('type18')
    .setName('type18')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type19')
    .setName('type19')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('type20')
    .setName('type20')
    .setType(types.NUMBER);
  
  fields
    .newDimension()
    .setId('rt_source')
    .setName('rt_source')
    .setType(types.TEXT);


  fields
    .newDimension()
    .setId('rt_campaign')
    .setName('rt_campaign')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('rt_adgroup')
    .setName('rt_adgroup')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('rt_ad')
    .setName('rt_ad')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('rt_placement')
    .setName('rt_placement')
    .setType(types.TEXT);
  
  fields
    .newDimension()
    .setId('rt_keyword')
    .setName('rt_keyword')
    .setType(types.TEXT);


  

  return fields;
}

// https://developers.google.com/datastudio/connector/reference#getschema
function getSchema(request) {
  return {schema: getFields().build()};
}

function responseToRows(requestedFields, response, packageName) {
  // Transform parsed data and filter for requested fields
  return response.map(function(item) {
    var row = [];
    requestedFields.asArray().forEach(function (field) {
      switch (field.getId()) {
        case "id":
          return row.push(item.id);
        case "campaign_id":
          return row.push(item.campaign_id);
        case "offer_id":
          return row.push(item.offer_id);
        case "source_id":
          return row.push(item.source_id);
        case "program_id":
          return row.push(item.program_id);
        case "landing_id":
          return row.push(item.landing_id);
        case "prelanding_id":
          return row.push(item.prelanding_id);
        case "clickid":
          return row.push(item.clickid);
        case "campaign":
          return row.push(item.campaign);
        case "offer":
          return row.push(item.offer);
        case "source":
          return row.push(item.source);
        case "network":
          return row.push(item.network);
        case "landing":
          return row.push(item.landing);
        case "prelanding":
          return row.push(item.prelanding);
        case "country":
          return row.push(item.country);
        case "city":
          return row.push(item.city);
        case "os":
          return row.push(item.os);
        case "browser":
          return row.push(item.browser);
        case "device":
          return row.push(item.device);
        case "device_brand":
          return row.push(item.device_brand);
        case "device_fullname":
          return row.push(item.device_fullname);
        case "isp":
          return row.push(item.isp);
        case "connection_type":
          return row.push(item.connection_type);
        case "user_agent":
          return row.push(item.user_agent);
        case "ip":
          return row.push(item.ip);
        case "postback_ip":
          return row.push(item.postback_ip);
        case "referer":
          return row.push(item.referer);
        case "page":
          return row.push(item.page);
        case "is_transaction":
          return row.push(item.is_transaction);
        case "type":
          return row.push(item.type);
        case "payout":
          return row.push(item.payout);
        case "payout_network":
          return row.push(item.payout_network);
        case "payout_default":
          return row.push(item.payout_default);
        case "currency":
          return row.push(item.currency);
        case "cost":
          return row.push(item.cost);
        case "cost_source":
          return row.push(item.cost_source);
        case "cost_default":
          return row.push(item.cost_default);
        case "status":
          return row.push(item.status);
        case "track_time":
          return row.push(item.track_time);
        case "conv_time":
          return row.push(item.conv_time);
        case "created_at":
          return row.push(item.created_at);
        case "ref_id":
          return row.push(item.ref_id);
        case "event":
          return row.push(item.event);
        case "p_sub1":
          return row.push(item.p_sub1);
        case "p_sub2":
          return row.push(item.p_sub2);
        case "p_sub3":
          return row.push(item.p_sub3);
        case "p_sub4":
          return row.push(item.p_sub4);
        case "p_sub5":
          return row.push(item.p_sub5);
        case "p_sub6":
          return row.push(item.p_sub6);
        case "p_sub7":
          return row.push(item.p_sub7);
        case "p_sub8":
          return row.push(item.p_sub8);
        case "p_sub9":
          return row.push(item.p_sub9);
        case "p_sub10":
          return row.push(item.p_sub10);
        case "p_sub11":
          return row.push(item.p_sub11);
        case "p_sub12":
          return row.push(item.p_sub12);
        case "p_sub13":
          return row.push(item.p_sub13);
        case "p_sub14":
          return row.push(item.p_sub14);
        case "p_sub15":
          return row.push(item.p_sub15);
        case "p_sub16":
          return row.push(item.p_sub16);
        case "p_sub17":
          return row.push(item.p_sub17);
        case "p_sub18":
          return row.push(item.p_sub18);
        case "p_sub19":
          return row.push(item.p_sub19);
        case "p_sub20":
          return row.push(item.p_sub20);
        case "fingerprint":
          return row.push(item.fingerprint);
        case "coupon":
          return row.push(item.coupon);
        case "deduplicate_token":
          return row.push(item.deduplicate_token);
        case "sub1":
          return row.push(item.sub1);
        case "sub2":
          return row.push(item.sub2);
        case "sub3":
          return row.push(item.sub3);
        case "sub4":
          return row.push(item.sub4);
        case "sub5":
          return row.push(item.sub5);
        case "sub6":
          return row.push(item.sub6);
        case "sub7":
          return row.push(item.sub7);
        case "sub8":
          return row.push(item.sub8);
        case "sub9":
          return row.push(item.sub9);
        case "sub10":
          return row.push(item.sub10);
        case "sub11":
          return row.push(item.sub11);
        case "sub12":
          return row.push(item.sub12);
        case "sub13":
          return row.push(item.sub13);
        case "sub14":
          return row.push(item.sub14);
        case "sub15":
          return row.push(item.sub15);
        case "sub16":
          return row.push(item.sub16);
        case "sub17":
          return row.push(item.sub17);
        case "sub18":
          return row.push(item.sub18);
        case "sub19":
          return row.push(item.sub19);
        case "sub20":
          return row.push(item.sub20);
        case "type1":
          return row.push(item.type1);
        case "type2":
          return row.push(item.type2);
        case "type3":
          return row.push(item.type3);
        case "type4":
          return row.push(item.type4);
        case "type5":
          return row.push(item.type5);
        case "type6":
          return row.push(item.type6);
        case "type7":
          return row.push(item.type7);
        case "type8":
          return row.push(item.type8);
        case "type9":
          return row.push(item.type9);
        case "type10":
          return row.push(item.type10);
        case "type11":
          return row.push(item.type11);
        case "type12":
          return row.push(item.type12);
        case "type13":
          return row.push(item.type13);
        case "type14":
          return row.push(item.type14);
        case "type15":
          return row.push(item.type15);
        case "type15":
          return row.push(item.type15);
        case "type17":
          return row.push(item.type17);
        case "type18":
          return row.push(item.type18);
        case "type19":
          return row.push(item.type19);
        case "type20":
          return row.push(item.type20);
        case "rt_source":
          return row.push(item.rt_source);
        case "rt_medium":
          return row.push(item.rt_medium);
        case "rt_campaign":
          return row.push(item.rt_campaign);
        case "rt_adgroup":
          return row.push(item.rt_adgroup);
        case "rt_ad":
          return row.push(item.rt_ad);
        case "rt_placement":
          return row.push(item.rt_placement);
        case "rt_keyword":
          return row.push(item.rt_keyword);
        default:
          return row.push("");
      }
    });
    return { values: row };
  });
}

/**
 * Validates config parameters and provides missing values.
 *
 * @param {Object} configParams Config parameters from `request`.
 * @returns {Object} Updated Config parameters.
 */
function validateConfig(configParams) {
  var configParams = configParams || {};
  if (!configParams.apiKey) {
    cc.newUserError()
      .setText("API token cannot be left blank.")
      .throwException();
  }
  configParams.apiKey = configParams.apiKey;
  configParams.dateFrom = configParams.dateFrom || dateFrom;
  configParams.dateTo = configParams.dateTo || dateTo;
  return configParams;
}

function getData(request) {
  request.configParams = validateConfig(request.configParams);
  var requestedFieldIds = request.fields.map(function(field) {
    return field.name;
  });
  var requestedFields = getFields().forIds(requestedFieldIds);

  // Fetch and parse data from API
  var url = [
    "https://api.redtrack.io/conversions/",
    "?date_from=",
    request.configParams.dateFrom,
    "&date_to=",
    request.configParams.dateTo,
    "&api_key=",
    request.configParams.apiKey
  ].join("");

  var response = UrlFetchApp.fetch(url);
  var parsedResponse = JSON.parse(response).items;
  var rows = responseToRows(requestedFields, parsedResponse);

  return {
    schema: requestedFields.build(),
    rows: rows
  };
}




















