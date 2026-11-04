var i = n(513461);
function r(e) {
    return e === i.B5.APPROVED || e === i.B5.REJECTED;
}
n.d(
    t,
    {},
    {
        NK: function (e) {
            return e.applicationStatus === i.B5.APPROVED && null != e.lastSeen;
        },
        Oe: function (e) {
            return r(e.applicationStatus) && null == e.lastSeen;
        },
        ar: function (e) {
            return e === i.B5.SUBMITTED;
        },
        mf: r,
    },
);
