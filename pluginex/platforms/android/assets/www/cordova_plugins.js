cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.polychrom.cordova.AccountManagerPlugin/www/js/accountmanager.js",
        "id": "com.polychrom.cordova.AccountManagerPlugin.accountmanager",
        "clobbers": [
            "accountmanager"
        ]
    },
    {
        "file": "plugins/jp.wizcorp.phonegap.plugin.wizSpinnerPlugin/www/phonegap/plugin/wizSpinner/wizSpinner.js",
        "id": "jp.wizcorp.phonegap.plugin.wizSpinnerPlugin.wizSpinnerPlugin",
        "clobbers": [
            "window.wizSpinner"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.polychrom.cordova.AccountManagerPlugin": "0.1.0",
    "jp.wizcorp.phonegap.plugin.wizSpinnerPlugin": "1.1.0"
}
// BOTTOM OF METADATA
});