n.d(t, {
    Ul: () => u,
    YE: () => l,
    ZP: () => a
}),
    n(388685);
var r = n(818083),
    i = n(981631),
    o = n(388032);
let a = (0, r.B)({
        kind: 'user',
        id: '2021-08_regional_payment_methods',
        label: 'Regional Payment Methods',
        defaultConfig: {
            enabledPaymentTypes: [],
            forceCountryCode: null,
            validCountryCodes: []
        },
        treatments: [
            {
                id: 1,
                label: 'Regional Payment Method for Germany',
                config: {
                    enabledPaymentTypes: [],
                    forceCountryCode: 'DE',
                    validCountryCodes: ['DE']
                }
            },
            {
                id: 2,
                label: 'Regional Payment Method for US',
                config: {
                    enabledPaymentTypes: [i.HeQ.VENMO, i.HeQ.CASH_APP],
                    forceCountryCode: 'US',
                    validCountryCodes: ['US']
                }
            },
            {
                id: 3,
                label: 'Regional Payment Method for Brazil',
                config: {
                    enabledPaymentTypes: [],
                    forceCountryCode: 'BR',
                    validCountryCodes: ['BR']
                }
            },
            {
                id: 4,
                label: 'Regional Payment Method for Turkey',
                config: {
                    enabledPaymentTypes: [],
                    forceCountryCode: 'TR',
                    validCountryCodes: ['TR']
                }
            },
            {
                id: 5,
                label: 'Regional Payment Method for Poland',
                config: {
                    enabledPaymentTypes: [i.HeQ.PRZELEWY24],
                    forceCountryCode: 'PL',
                    validCountryCodes: ['PL']
                }
            },
            {
                id: 6,
                label: 'Enable paysafecard',
                config: {
                    enabledPaymentTypes: [i.HeQ.PAYSAFE_CARD],
                    forceCountryCode: 'DE',
                    validCountryCodes: ['BG', 'CZ', 'DK', 'HU', 'RO', 'SE', 'DE']
                }
            },
            {
                id: 7,
                label: 'Regional Payment Method for Philippines',
                config: {
                    enabledPaymentTypes: [i.HeQ.GCASH],
                    forceCountryCode: 'PH',
                    validCountryCodes: ['PH']
                }
            },
            {
                id: 8,
                label: 'Regional Payment Method for Malaysia',
                config: {
                    enabledPaymentTypes: [i.HeQ.GRABPAY_MY],
                    forceCountryCode: 'MY',
                    validCountryCodes: ['MY']
                }
            },
            {
                id: 9,
                label: 'Regional Payment Method for Vietnam',
                config: {
                    enabledPaymentTypes: [i.HeQ.MOMO_WALLET],
                    forceCountryCode: 'VN',
                    validCountryCodes: ['VN']
                }
            },
            {
                id: 10,
                label: 'Regional Payment Method for Indonesia',
                config: {
                    enabledPaymentTypes: [i.HeQ.GOPAY_WALLET],
                    forceCountryCode: 'ID',
                    validCountryCodes: ['ID']
                }
            },
            {
                id: 11,
                label: 'Regional Payment Method for South Korea',
                config: {
                    enabledPaymentTypes: [i.HeQ.KAKAOPAY],
                    forceCountryCode: 'KR',
                    validCountryCodes: ['KR']
                }
            },
            {
                id: 12,
                label: 'Regional Payment Method for Belgium',
                config: {
                    enabledPaymentTypes: [i.HeQ.PAYSAFE_CARD, i.HeQ.BANCONTACT],
                    forceCountryCode: 'BE',
                    validCountryCodes: ['BE']
                }
            },
            {
                id: 13,
                label: 'Regional Payment Method for Austria',
                config: {
                    enabledPaymentTypes: [i.HeQ.PAYSAFE_CARD, i.HeQ.EPS],
                    forceCountryCode: 'AT',
                    validCountryCodes: ['AT']
                }
            },
            {
                id: 14,
                label: 'Regional Payment Method for Netherlands',
                config: {
                    enabledPaymentTypes: [i.HeQ.PAYSAFE_CARD, i.HeQ.IDEAL],
                    forceCountryCode: 'NL',
                    validCountryCodes: ['NL']
                }
            },
            {
                id: 15,
                label: 'Launch Paysafecard',
                config: {
                    enabledPaymentTypes: [i.HeQ.PAYSAFE_CARD],
                    forceCountryCode: 'ES',
                    validCountryCodes: ['ES', 'IT']
                }
            },
            {
                id: 16,
                label: 'Launch Cash App',
                config: {
                    enabledPaymentTypes: [i.HeQ.CASH_APP],
                    forceCountryCode: 'US',
                    validCountryCodes: ['US']
                }
            }
        ]
    }),
    s = new Map([
        ['abn_amro', 'ABN AMRO'],
        ['asn_bank', 'ASN Bank'],
        ['bunq', 'Bunq'],
        ['ing ', 'ING'],
        ['knab', 'Knab'],
        ['n26', 'N26'],
        ['nn', 'Nationale-Nederlanden'],
        ['rabobank', 'Rabobank'],
        ['revolut', 'Revolut'],
        ['regiobank', 'RegioBank'],
        ['sns_bank', 'SNS Bank (De Volksbank)'],
        ['triodos_bank', 'Triodos Bank'],
        ['van_lanschot', 'Van Lanschot'],
        ['yoursafe', 'Yoursafe'],
        ['handelsbanken', 'Handelsbanken']
    ]);
function l(e) {
    return void 0 !== e && s.has(e) ? s.get(e) : o.NW.string(o.t.jdPblp);
}
let c = new Map([
    ['arzte_und_apotheker_bank', 'Ärzte- und Apothekerbank'],
    ['austrian_anadi_bank_ag', 'Austrian Anadi Bank AG'],
    ['bank_austria', 'Bank Austria'],
    ['bankhaus_carl_spangler', 'Bankhaus Carl Spängler & Co.AG'],
    ['bankhaus_schelhammer_und_schattera_ag', 'Bankhaus Schelhammer & Schattera AG'],
    ['bawag_psk_ag', 'BAWAG P.S.K. AG'],
    ['bks_bank_ag', 'BKS Bank AG'],
    ['brull_kallmus_bank_ag', 'Brüll Kallmus Bank AG'],
    ['btv_vier_lander_bank', 'BTV VIER LÄNDER BANK'],
    ['capital_bank_grawe_gruppe_ag', 'Capital Bank Grawe Gruppe AG'],
    ['dolomitenbank', 'Dolomitenbank'],
    ['easybank_ag', 'Easybank AG'],
    ['erste_bank_und_sparkassen', 'Erste Bank und Sparkassen'],
    ['hypo_alpeadriabank_international_ag', 'Hypo Alpe-Adria-Bank International AG'],
    ['hypo_noe_lb_fur_niederosterreich_u_wien', 'HYPO NOE LB für Niederösterreich u. Wien'],
    ['hypo_oberosterreich_salzburg_steiermark', 'HYPO Oberösterreich, Salzburg, Steiermark'],
    ['hypo_tirol_bank_ag', 'Hypo Tirol Bank AG'],
    ['hypo_vorarlberg_bank_ag', 'Hypo Vorarlberg Bank AG'],
    ['hypo_bank_burgenland_aktiengesellschaft', 'HYPO-BANK BURGENLAND Aktiengesellschaft'],
    ['marchfelder_bank', 'Marchfelder Bank'],
    ['oberbank_ag', 'Oberbank AG'],
    ['raiffeisen_bankengruppe_osterreich', 'Raiffeisen Bankengruppe Österreich'],
    ['schoellerbank_ag', 'Schoellerbank AG'],
    ['sparda_bank_wien', 'Sparda-Bank Wien'],
    ['volksbank_gruppe', 'Volksbank Gruppe'],
    ['volkskreditbank_ag', 'Volkskreditbank AG'],
    ['vr_bank_braunau', 'VR-Bank Braunau']
]);
function u(e) {
    return void 0 !== e && c.has(e) ? c.get(e) : o.NW.string(o.t.jdPblp);
}
