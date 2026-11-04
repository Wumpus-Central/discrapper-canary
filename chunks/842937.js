n.d(
    t,
    {},
    {
        A: function (e) {
            return e
                .replace(/[\s-~]+/g, "-")
                .replace(/^-+/, "")
                .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
                .toLowerCase();
        },
    },
);
