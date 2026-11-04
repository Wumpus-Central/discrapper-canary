var i = n(855986),
    r = n(996439),
    s = n(800828),
    o = n(652215);
function a(e, t) {
    let [n] = (0, i.bG)(
        [s.A],
        () => [s.A.getGameRelationshipsForUserByType(e, t), s.A.getGameRelationshipsVersion()],
        [t, e],
        r.D,
    );
    return n;
}
n.d(
    t,
    {},
    {
        KL: function (e, t) {
            let [n] = (0, i.bG)(
                [s.A],
                () => {
                    let n = s.A.getGameRelationshipsForUserByType(e, t),
                        i = s.A.getGameRelationshipsVersion();
                    return [n.length > 0, i];
                },
                [t, e],
                r.D,
            );
            return n;
        },
        f1: function (e) {
            return a(e, o.eA$.FRIEND);
        },
        fi: function (e) {
            return a(e, o.eA$.PENDING_INCOMING);
        },
    },
);
