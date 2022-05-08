export const validateFavorites = (dogs, oldData) => {
    let isFavorite = false;
    if (oldData != null) {
      for (var i = 0; i < oldData.length; i++) {
        if (dogs === oldData[i]) {
          isFavorite = true;
        }
      }
      return isFavorite;
    } else {
      return isFavorite;
    }
  };