axios.get('https://api.github.com/users/joseFelipe')
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.warn(err);
    });