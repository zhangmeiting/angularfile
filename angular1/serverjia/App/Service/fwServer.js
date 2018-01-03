/**
 * Created by Administrator on 2017/10/19.
 */
app.factory("fwServer", ["baseServer", function (baseServer) {
    return {
        fw: function (type, url) {
            return baseServer.ajax(type, url);
        }
    }
}]);