class Definer {
    /**genral errors */
    static general_err1 = "att: something went wrong!";
    static general_err2 = "att: there is no data with that params!";
    static general_err3 = "file  upload error!";

    /**member auth related */
    static auth_err1 = "att: mongodb validation failed!";
    static auth_err3 = "att: no member with that mb_nick!";
    static auth_err4 = "att: your credentials does not match!";

     /**product related errors */
     static product_err1 = "att: product creation failed!";
}

module.exports = Definer;