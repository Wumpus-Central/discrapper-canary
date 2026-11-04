n.d(
    t,
    {},
    {
        A: function (e) {
            return null != e.member && null != e.member.joined_at && "" !== e.member.user.username;
        },
    },
);
