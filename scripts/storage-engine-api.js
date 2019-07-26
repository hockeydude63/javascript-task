/**
 * The client must call this to initializ the storage engine before using it.
 * If the storage engine initializes successfully the successCallback will be invoked with a null object.
 * If the errorCallback is invoked then the storage engine cannot be used.
 * It should be possible to call this method mutliple times, and the same result will be returned each time.
 * 
 * @param {Function} successCallback The callback that will be invoked if the storage engine initializes.
 * @param {Function} errorCallback The callback that will be invoked in error scenarios
 */

 function init(successCallback, errorCallback)

 /**
  * The client must call this to initialze a specific objec type in the storage engine.
  * If the storage engine supports the object type the successCallback will be invoked with a null value.
  * It should be possible to call this method mutliple times, and the same result will be returned each time.
  * If the errorCallback is invoked then the object type cannot be stored.
  * 
  * @param {String} type The type of the object that will be stored.
  * @param {Function} successCallback The callback that will be invoked if the storage engine initializes.
  * @param {Function} errorCallback The callback that will be invoked on error scenarios.
  */

  function initObjectStore(type, successCallback, errorCallback)

  