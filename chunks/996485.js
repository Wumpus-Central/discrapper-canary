l.d(
    e,
    {},
    {
        Z: function (n, e) {
            let l = e.trim().toLocaleLowerCase();
            return "" === l ? n : n.filter((n) => n.name.toLocaleLowerCase().includes(l));
        },
    },
);
