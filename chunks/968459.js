s.d(
    p,
    {},
    {
        A: function (r) {
            return null == r.serverIP || null == r.port ? null : `${r.serverIP}:${r.port}`;
        },
    },
);
