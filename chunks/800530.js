n.d(t, {
    Cg: function () {
        return v;
    },
    Cp: function () {
        return P;
    },
    Cs: function () {
        return _;
    },
    EY: function () {
        return b;
    },
    I5: function () {
        return T;
    },
    JQ: function () {
        return R;
    },
    RY: function () {
        return S;
    },
    Sv: function () {
        return A;
    },
    TX: function () {
        return Z;
    },
    ZW: function () {
        return j;
    },
    bK: function () {
        return p;
    },
    n0: function () {
        return h;
    },
    o6: function () {
        return L;
    },
    oE: function () {
        return E;
    },
    qS: function () {
        return g;
    },
    s: function () {
        return f;
    },
    sQ: function () {
        return N;
    },
    wo: function () {
        return m;
    }
});
var i,
    r,
    l,
    a,
    o,
    s,
    c,
    d,
    u,
    m,
    h,
    f,
    p,
    _,
    g,
    E,
    C = n(990547),
    I = n(981631);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((i = u || (u = {})).SETTINGS = 'SETTINGS'), (i.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (i.GUILD_SETTINGS = 'GUILD_SETTINGS'), (i.ENCRYPTION = 'ENCRYPTION'), (i.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (i.DATA_PRIVACY = 'DATA_PRIVACY');
class N {}
x(N, 'TOS_LINK', 'https://discord.com/terms'), x(N, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), x(N, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), x(N, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), x(N, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), x(N, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__'), x(N, 'LEARN_MORE_UU_APPEAL_LINK', 'https://support.discord.com/hc/articles/360041820932');
class v {}
x(v, 'CLASSIFICATION_ID', 'classification_id'), x(v, 'INCIDENT_TIMESTAMP', 'incident_time'), ((r = m || (m = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (r.LEARN_MORE_LINK = 'learn_more_link');
class T {}
x(T, 'ICON_TYPE', 'icon_type'),
    x(T, 'HEADER', 'header'),
    x(T, 'BODY', 'body'),
    x(T, 'CTAS', 'ctas'),
    x(T, 'TIMESTAMP', 'timestamp'),
    x(T, 'THEME', 'theme'),
    x(T, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    x(T, 'LEARN_MORE_LINK', 'learn_more_link'),
    x(T, 'CLASSIFICATION_ID', 'classification_id'),
    ((l = h || (h = {}))[(l.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (l[(l.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (l[(l.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (l[(l.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (l[(l.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (l[(l.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (l[(l.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (l[(l.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((a = f || (f = {}))[(a.SystemDM = 0)] = 'SystemDM'),
    (a[(a.StandingTab = 1)] = 'StandingTab'),
    (a[(a.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: I.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: I.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: I.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: I.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: I.jXE.APPEAL_INGESTION_THANKS,
        SPAM: I.jXE.APPEAL_INGESTION_SPAM
    }),
    ((o = p || (p = {}))[(o.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (o[(o.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (o[(o.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (o[(o.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let S = [0, 1, 2, 3],
    A = 372,
    b = 279,
    j = { impression_group: C.ImpressionGroups.APPEAL_INGESTION };
((s = _ || (_ = {})).SPEED_BUMP = 'speed-bump'), (s.COLLECT_SIGNAL = 'collect-signal'), (s.CONFIRM_SUBMISSION = 'confirm-submission'), (s.REQUEST_SENT = 'request-sent'), (s.THANKS = 'thanks');
let R = {
    'speed-bump': {
        next: 'collect-signal',
        prev: null
    },
    'collect-signal': {
        next: 'confirm-submission',
        prev: 'speed-bump'
    },
    'confirm-submission': {
        next: 'request-sent',
        prev: 'collect-signal'
    },
    'request-sent': {
        next: null,
        prev: null
    }
};
((c = g || (g = {}))[(c.USER = 1)] = 'USER'), (c[(c.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (c[(c.GUILD_MEMBER = 3)] = 'GUILD_MEMBER'), ((d = E || (E = {})).LOADING = 'loading'), (d.ERROR = 'error'), (d.SUCCESS = 'success'), (d.FAILURE = 'failure'), (d.NONE = 'none');
let Z = 2000,
    P = 15000,
    L = 5;
