import Bundle from "./Bundle";

var BundleProvider = function(){
    var self = this;

    self.$get = [function(){
        return new Bundle(this);
    }];
};

module.exports = BundleProvider;
