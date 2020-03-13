'use strict';

/**
* array x を受け取り、17で割り切れるかどうか確かめ、割り切れる場合trueを返す。
* @param {int} x
* @return {boolen}
*/
function isMultipleOfSeventeen(x){
    return x % 17 === 0 ;
}
module.exports = {
  isMultipleOfSeventeen
};
