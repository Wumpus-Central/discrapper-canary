t.d(e, {
    $l: () => c,
    RI: () => i,
    Ud: () => s
});
var r = t(388032);
let i = 'https://discord.com/community/securing-your-server',
    s = ['MESSAGE_SPAM', 'DM_SPAM', 'MENTION_SPAM', 'SUSPICIOUS_USERS', 'SETTINGS_SPAM'],
    c = (n) => {
        switch (n) {
            case 'DM_SPAM':
                return r.intl.string(r.t['9CYNmZ']);
            case 'MENTION_SPAM':
                return r.intl.string(r.t['hR/IdH']);
            case 'MESSAGE_SPAM':
                return r.intl.string(r.t.fwloj4);
            case 'SETTINGS_SPAM':
                return r.intl.string(r.t.ETFVFx);
            case 'SUSPICIOUS_USERS':
                return r.intl.string(r.t['lKXu+v']);
        }
        return null;
    };
