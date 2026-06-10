// ====================================================================
// VV Clinical Center — Typeform-style patient registration
// ====================================================================
const CONFIG = {
  // POST endpoint for the submission JSON. Leave empty to console.log.
  submitEndpoint: '',
  // Google review URL — replace YOUR_PLACE_ID_HERE with your Google Place ID.
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE',
};

// ====================================================================
// Country codes (full list, alphabetical, Lebanon default)
// ====================================================================
const COUNTRY_CODES = [
  { code: '+93',   name: 'Afghanistan' }, { code: '+355',  name: 'Albania' }, { code: '+213',  name: 'Algeria' },
  { code: '+1684', name: 'American Samoa' }, { code: '+376',  name: 'Andorra' }, { code: '+244',  name: 'Angola' },
  { code: '+1264', name: 'Anguilla' }, { code: '+1268', name: 'Antigua and Barbuda' }, { code: '+54',   name: 'Argentina' },
  { code: '+374',  name: 'Armenia' }, { code: '+297',  name: 'Aruba' }, { code: '+61',   name: 'Australia' },
  { code: '+43',   name: 'Austria' }, { code: '+994',  name: 'Azerbaijan' }, { code: '+1242', name: 'Bahamas' },
  { code: '+973',  name: 'Bahrain' }, { code: '+880',  name: 'Bangladesh' }, { code: '+1246', name: 'Barbados' },
  { code: '+375',  name: 'Belarus' }, { code: '+32',   name: 'Belgium' }, { code: '+501',  name: 'Belize' },
  { code: '+229',  name: 'Benin' }, { code: '+1441', name: 'Bermuda' }, { code: '+975',  name: 'Bhutan' },
  { code: '+591',  name: 'Bolivia' }, { code: '+387',  name: 'Bosnia and Herzegovina' }, { code: '+267',  name: 'Botswana' },
  { code: '+55',   name: 'Brazil' }, { code: '+246',  name: 'British Indian Ocean Territory' }, { code: '+1284', name: 'British Virgin Islands' },
  { code: '+673',  name: 'Brunei' }, { code: '+359',  name: 'Bulgaria' }, { code: '+226',  name: 'Burkina Faso' },
  { code: '+257',  name: 'Burundi' }, { code: '+855',  name: 'Cambodia' }, { code: '+237',  name: 'Cameroon' },
  { code: '+1',    name: 'Canada' }, { code: '+238',  name: 'Cape Verde' }, { code: '+1345', name: 'Cayman Islands' },
  { code: '+236',  name: 'Central African Republic' }, { code: '+235',  name: 'Chad' }, { code: '+56',   name: 'Chile' },
  { code: '+86',   name: 'China' }, { code: '+57',   name: 'Colombia' }, { code: '+269',  name: 'Comoros' },
  { code: '+682',  name: 'Cook Islands' }, { code: '+506',  name: 'Costa Rica' }, { code: '+385',  name: 'Croatia' },
  { code: '+53',   name: 'Cuba' }, { code: '+599',  name: 'Curaçao' }, { code: '+357',  name: 'Cyprus' },
  { code: '+420',  name: 'Czech Republic' }, { code: '+243',  name: 'Democratic Republic of the Congo' }, { code: '+45',   name: 'Denmark' },
  { code: '+253',  name: 'Djibouti' }, { code: '+1767', name: 'Dominica' }, { code: '+1809', name: 'Dominican Republic' },
  { code: '+670',  name: 'East Timor' }, { code: '+593',  name: 'Ecuador' }, { code: '+20',   name: 'Egypt' },
  { code: '+503',  name: 'El Salvador' }, { code: '+240',  name: 'Equatorial Guinea' }, { code: '+291',  name: 'Eritrea' },
  { code: '+372',  name: 'Estonia' }, { code: '+268',  name: 'Eswatini' }, { code: '+251',  name: 'Ethiopia' },
  { code: '+500',  name: 'Falkland Islands' }, { code: '+298',  name: 'Faroe Islands' }, { code: '+679',  name: 'Fiji' },
  { code: '+358',  name: 'Finland' }, { code: '+33',   name: 'France' }, { code: '+594',  name: 'French Guiana' },
  { code: '+689',  name: 'French Polynesia' }, { code: '+241',  name: 'Gabon' }, { code: '+220',  name: 'Gambia' },
  { code: '+995',  name: 'Georgia' }, { code: '+49',   name: 'Germany' }, { code: '+233',  name: 'Ghana' },
  { code: '+350',  name: 'Gibraltar' }, { code: '+30',   name: 'Greece' }, { code: '+299',  name: 'Greenland' },
  { code: '+1473', name: 'Grenada' }, { code: '+590',  name: 'Guadeloupe' }, { code: '+1671', name: 'Guam' },
  { code: '+502',  name: 'Guatemala' }, { code: '+44',   name: 'Guernsey' }, { code: '+224',  name: 'Guinea' },
  { code: '+245',  name: 'Guinea-Bissau' }, { code: '+592',  name: 'Guyana' }, { code: '+509',  name: 'Haiti' },
  { code: '+504',  name: 'Honduras' }, { code: '+852',  name: 'Hong Kong' }, { code: '+36',   name: 'Hungary' },
  { code: '+354',  name: 'Iceland' }, { code: '+91',   name: 'India' }, { code: '+62',   name: 'Indonesia' },
  { code: '+98',   name: 'Iran' }, { code: '+964',  name: 'Iraq' }, { code: '+353',  name: 'Ireland' },
  { code: '+44',   name: 'Isle of Man' }, { code: '+972',  name: 'Israel' }, { code: '+39',   name: 'Italy' },
  { code: '+225',  name: 'Ivory Coast' }, { code: '+1876', name: 'Jamaica' }, { code: '+81',   name: 'Japan' },
  { code: '+44',   name: 'Jersey' }, { code: '+962',  name: 'Jordan' }, { code: '+7',    name: 'Kazakhstan' },
  { code: '+254',  name: 'Kenya' }, { code: '+686',  name: 'Kiribati' }, { code: '+383',  name: 'Kosovo' },
  { code: '+965',  name: 'Kuwait' }, { code: '+996',  name: 'Kyrgyzstan' }, { code: '+856',  name: 'Laos' },
  { code: '+371',  name: 'Latvia' }, { code: '+961',  name: 'Lebanon' }, { code: '+266',  name: 'Lesotho' },
  { code: '+231',  name: 'Liberia' }, { code: '+218',  name: 'Libya' }, { code: '+423',  name: 'Liechtenstein' },
  { code: '+370',  name: 'Lithuania' }, { code: '+352',  name: 'Luxembourg' }, { code: '+853',  name: 'Macau' },
  { code: '+261',  name: 'Madagascar' }, { code: '+265',  name: 'Malawi' }, { code: '+60',   name: 'Malaysia' },
  { code: '+960',  name: 'Maldives' }, { code: '+223',  name: 'Mali' }, { code: '+356',  name: 'Malta' },
  { code: '+692',  name: 'Marshall Islands' }, { code: '+596',  name: 'Martinique' }, { code: '+222',  name: 'Mauritania' },
  { code: '+230',  name: 'Mauritius' }, { code: '+262',  name: 'Mayotte' }, { code: '+52',   name: 'Mexico' },
  { code: '+691',  name: 'Micronesia' }, { code: '+373',  name: 'Moldova' }, { code: '+377',  name: 'Monaco' },
  { code: '+976',  name: 'Mongolia' }, { code: '+382',  name: 'Montenegro' }, { code: '+1664', name: 'Montserrat' },
  { code: '+212',  name: 'Morocco' }, { code: '+258',  name: 'Mozambique' }, { code: '+95',   name: 'Myanmar' },
  { code: '+264',  name: 'Namibia' }, { code: '+674',  name: 'Nauru' }, { code: '+977',  name: 'Nepal' },
  { code: '+31',   name: 'Netherlands' }, { code: '+687',  name: 'New Caledonia' }, { code: '+64',   name: 'New Zealand' },
  { code: '+505',  name: 'Nicaragua' }, { code: '+227',  name: 'Niger' }, { code: '+234',  name: 'Nigeria' },
  { code: '+683',  name: 'Niue' }, { code: '+850',  name: 'North Korea' }, { code: '+389',  name: 'North Macedonia' },
  { code: '+1670', name: 'Northern Mariana Islands' }, { code: '+47',   name: 'Norway' }, { code: '+968',  name: 'Oman' },
  { code: '+92',   name: 'Pakistan' }, { code: '+680',  name: 'Palau' }, { code: '+970',  name: 'Palestine' },
  { code: '+507',  name: 'Panama' }, { code: '+675',  name: 'Papua New Guinea' }, { code: '+595',  name: 'Paraguay' },
  { code: '+51',   name: 'Peru' }, { code: '+63',   name: 'Philippines' }, { code: '+48',   name: 'Poland' },
  { code: '+351',  name: 'Portugal' }, { code: '+1787', name: 'Puerto Rico' }, { code: '+974',  name: 'Qatar' },
  { code: '+242',  name: 'Republic of the Congo' }, { code: '+262',  name: 'Réunion' }, { code: '+40',   name: 'Romania' },
  { code: '+7',    name: 'Russia' }, { code: '+250',  name: 'Rwanda' }, { code: '+590',  name: 'Saint Barthélemy' },
  { code: '+290',  name: 'Saint Helena' }, { code: '+1869', name: 'Saint Kitts and Nevis' }, { code: '+1758', name: 'Saint Lucia' },
  { code: '+590',  name: 'Saint Martin' }, { code: '+508',  name: 'Saint Pierre and Miquelon' }, { code: '+1784', name: 'Saint Vincent and the Grenadines' },
  { code: '+685',  name: 'Samoa' }, { code: '+378',  name: 'San Marino' }, { code: '+239',  name: 'São Tomé and Príncipe' },
  { code: '+966',  name: 'Saudi Arabia' }, { code: '+221',  name: 'Senegal' }, { code: '+381',  name: 'Serbia' },
  { code: '+248',  name: 'Seychelles' }, { code: '+232',  name: 'Sierra Leone' }, { code: '+65',   name: 'Singapore' },
  { code: '+1721', name: 'Sint Maarten' }, { code: '+421',  name: 'Slovakia' }, { code: '+386',  name: 'Slovenia' },
  { code: '+677',  name: 'Solomon Islands' }, { code: '+252',  name: 'Somalia' }, { code: '+27',   name: 'South Africa' },
  { code: '+82',   name: 'South Korea' }, { code: '+211',  name: 'South Sudan' }, { code: '+34',   name: 'Spain' },
  { code: '+94',   name: 'Sri Lanka' }, { code: '+249',  name: 'Sudan' }, { code: '+597',  name: 'Suriname' },
  { code: '+46',   name: 'Sweden' }, { code: '+41',   name: 'Switzerland' }, { code: '+963',  name: 'Syria' },
  { code: '+886',  name: 'Taiwan' }, { code: '+992',  name: 'Tajikistan' }, { code: '+255',  name: 'Tanzania' },
  { code: '+66',   name: 'Thailand' }, { code: '+228',  name: 'Togo' }, { code: '+690',  name: 'Tokelau' },
  { code: '+676',  name: 'Tonga' }, { code: '+1868', name: 'Trinidad and Tobago' }, { code: '+216',  name: 'Tunisia' },
  { code: '+90',   name: 'Turkey' }, { code: '+993',  name: 'Turkmenistan' }, { code: '+1649', name: 'Turks and Caicos Islands' },
  { code: '+688',  name: 'Tuvalu' }, { code: '+256',  name: 'Uganda' }, { code: '+380',  name: 'Ukraine' },
  { code: '+971',  name: 'United Arab Emirates' }, { code: '+44',   name: 'United Kingdom' }, { code: '+1',    name: 'United States' },
  { code: '+598',  name: 'Uruguay' }, { code: '+998',  name: 'Uzbekistan' }, { code: '+678',  name: 'Vanuatu' },
  { code: '+379',  name: 'Vatican City' }, { code: '+58',   name: 'Venezuela' }, { code: '+84',   name: 'Vietnam' },
  { code: '+1340', name: 'U.S. Virgin Islands' }, { code: '+681',  name: 'Wallis and Futuna' }, { code: '+212',  name: 'Western Sahara' },
  { code: '+967',  name: 'Yemen' }, { code: '+260',  name: 'Zambia' }, { code: '+263',  name: 'Zimbabwe' },
];

function populateCountryCodes() {
  document.querySelectorAll('#phone1Code, #phone2Code').forEach((sel) => {
    sel.innerHTML = COUNTRY_CODES.map(
      (c) => `<option value="${c.code}"${c.name === 'Lebanon' ? ' selected' : ''}>${c.code}  ${c.name}</option>`
    ).join('');
  });
}

// ====================================================================
// i18n
// ====================================================================
const I18N = {
  en: {
    'welcome.title': 'Welcome to VV Clinical Center',
    'welcome.sub': "A quick form to get you registered — about 2 minutes.",
    'start': 'Start',
    'ok': 'OK',
    'continue': 'Continue',
    'enter': 'press <kbd>Enter</kbd>',
    'autoNext': 'A choice will move you forward.',
    'q.firstName': "What's your first name?",
    'q.firstName.sub': 'So we know what to call you.',
    'q.lastName': 'And your family name?',
    'q.dob': 'When were you born?',
    'q.gender': 'Gender',
    'q.optional': "Optional — leave empty to skip.",
    'q.phone1': "What's your phone number?",
    'q.phone1.sub': "We'll use WhatsApp to confirm appointments.",
    'q.phone2': 'Any alternate number?',
    'q.email': 'Your email?',
    'q.address': 'Your address?',
    'sec.medical': 'Medical questionnaire',
    'medIntro.title': 'A few quick health questions',
    'medIntro.sub': 'Confidential — only used for your safe treatment.',
    'q.smoke': 'Do you smoke?',
    'q.allergies': 'Any allergies?',
    'q.diabetes': 'Do you have diabetes?',
    'q.heart': 'Any heart problems?',
    'q.pregnant': 'Currently pregnant or breastfeeding?',
    'q.kids': 'Children under 18 at home?',
    'q.medNotes': 'Anything else we should know?',
    'q.medNotes.sub': 'Other conditions, medications, or concerns.',
    'sec.prefs': 'A bit about you',
    'prefsIntro.title': 'Help us serve you better',
    'prefsIntro.sub': 'A few short preference questions.',
    'q.hearAbout': 'How did you hear about us?',
    'q.lastVisit': 'When was your last dental visit?',
    'q.interests': 'What are you interested in?',
    'q.multiHint': 'Choose as many as you like.',
    'q.insurance': 'Insurance provider?',
    'q.occupation': 'What do you do?',
    'q.apptTime': 'When do you prefer your appointments?',
    'q.contactPref': 'Best way to reach you?',
    'q.consent': 'Reminders, offers & health tips?',
    'q.consent.sub': 'Occasional WhatsApp messages — opt out any time.',
    'sec.review': 'Review',
    'reviewIntro.title': 'Visited us before?',
    'reviewIntro.sub': "If yes, we'd love a quick rating. If not, just skip ahead.",
    'q.rating': 'How would you rate your experience?',
    'q.review': 'Tell us in your own words',
    'q.review.sub': 'Loved something? Anything we can improve?',
    'review.placeholder': 'What did you love? Anything we can improve?',
    'review.postGoogle': 'Also post this on Google',
    'sec.finish': 'All done',
    'submit.title': 'Ready to send your registration?',
    'submit.sub': "Tap the button below — we'll be in touch shortly.",
    'submit': 'Submit',
    'thanks.title': 'Thank you!',
    'thanks.sub': "Your registration has been received. We'll see you soon.",
    'yes': 'Yes', 'no': 'No', 'na': 'Not applicable',
    'opt.female': 'Female', 'opt.male': 'Male', 'opt.other': 'Prefer not to say',
    'opt.friend': 'Friend / Family', 'opt.instagram': 'Instagram', 'opt.facebook': 'Facebook',
    'opt.google': 'Google search', 'opt.tiktok': 'TikTok', 'opt.walk': 'Walk-in / Sign', 'opt.other2': 'Other',
    'opt.lv1': 'Less than 6 months', 'opt.lv2': '6 – 12 months', 'opt.lv3': '1 – 2 years',
    'opt.lv4': 'More than 2 years', 'opt.lv5': 'Never',
    'int.cleaning': 'Cleaning & Hygiene', 'int.whitening': 'Whitening', 'int.ortho': 'Orthodontics / Aligners',
    'int.implants': 'Implants', 'int.cosmetic': 'Cosmetic / Veneers', 'int.pediatric': 'Pediatric Dentistry',
    'int.rootcanal': 'Root canal', 'int.emergency': 'Emergency care',
    'opt.tm1': 'Weekday morning', 'opt.tm2': 'Weekday afternoon', 'opt.tm3': 'Weekday evening', 'opt.tm4': 'Weekend',
    'opt.ch1': 'WhatsApp', 'opt.ch2': 'Phone call', 'opt.ch3': 'SMS', 'opt.ch4': 'Email',
    'opt.consentYes': 'Yes please', 'opt.consentNo': 'No thanks',
    'ph.typeHere': 'Type your answer here…',
    'ph.address': 'Street, building, area, city…',
    'ph.optionalTxt': 'Optional…',
    'ph.companyName': 'Company name',
    'ph.occupation': 'Occupation',
    'alert.required': 'Please answer this question to continue.',
    'alert.error': 'Something went wrong. Please try again.',
    'alert.copied': 'Review copied — opening Google…',
    'alert.noReview': 'Please write your review first.',
  },
  ar: {
    'welcome.title': 'أهلاً بكم في VV Clinical Center',
    'welcome.sub': 'استمارة سريعة لتسجيلك — حوالي دقيقتين.',
    'start': 'ابدأ',
    'ok': 'حسناً',
    'continue': 'متابعة',
    'enter': 'اضغط <kbd>Enter</kbd>',
    'autoNext': 'سيتم الانتقال تلقائياً عند الاختيار.',
    'q.firstName': 'ما اسمك الأول؟',
    'q.firstName.sub': 'لنعرف كيف نناديك.',
    'q.lastName': 'وكنيتك؟',
    'q.dob': 'متى تاريخ ميلادك؟',
    'q.gender': 'الجنس',
    'q.optional': 'اختياري — اتركه فارغاً للتخطي.',
    'q.phone1': 'ما هو رقم هاتفك؟',
    'q.phone1.sub': 'سنستخدم واتساب لتأكيد المواعيد.',
    'q.phone2': 'هل لديك رقم بديل؟',
    'q.email': 'بريدك الإلكتروني؟',
    'q.address': 'عنوانك؟',
    'sec.medical': 'الاستبيان الطبي',
    'medIntro.title': 'بعض الأسئلة الصحية السريعة',
    'medIntro.sub': 'سرية — تُستخدم فقط لعلاجك الآمن.',
    'q.smoke': 'هل تدخن؟',
    'q.allergies': 'هل لديك حساسية؟',
    'q.diabetes': 'هل لديك سكري؟',
    'q.heart': 'هل لديك مشاكل في القلب؟',
    'q.pregnant': 'هل أنتِ حامل أو مرضعة حالياً؟',
    'q.kids': 'هل لديك أطفال تحت 18 في المنزل؟',
    'q.medNotes': 'هل هناك شيء آخر يجب أن نعرفه؟',
    'q.medNotes.sub': 'حالات أو أدوية أو مخاوف أخرى.',
    'sec.prefs': 'القليل عنك',
    'prefsIntro.title': 'ساعدنا لخدمتك بشكل أفضل',
    'prefsIntro.sub': 'بضعة أسئلة قصيرة عن تفضيلاتك.',
    'q.hearAbout': 'كيف سمعت عنا؟',
    'q.lastVisit': 'متى كانت آخر زيارة لطبيب الأسنان؟',
    'q.interests': 'بماذا أنت مهتم؟',
    'q.multiHint': 'اختر ما يناسبك.',
    'q.insurance': 'شركة التأمين؟',
    'q.occupation': 'ما هي مهنتك؟',
    'q.apptTime': 'ما هو الوقت المفضل لمواعيدك؟',
    'q.contactPref': 'أفضل طريقة للتواصل معك؟',
    'q.consent': 'تذكيرات وعروض ونصائح صحية؟',
    'q.consent.sub': 'رسائل واتساب من حين لآخر — يمكن إلغاء الاشتراك في أي وقت.',
    'sec.review': 'تقييم',
    'reviewIntro.title': 'هل زرتنا من قبل؟',
    'reviewIntro.sub': 'إن كان نعم، يسعدنا تقييم سريع. إن لا، يمكنك تخطّي هذا.',
    'q.rating': 'كيف تقيّم تجربتك؟',
    'q.review': 'أخبرنا بكلماتك',
    'q.review.sub': 'ما الذي أعجبك؟ وما يمكننا تحسينه؟',
    'review.placeholder': 'ما الذي أعجبك؟ وما يمكننا تحسينه؟',
    'review.postGoogle': 'انشر هذا أيضاً على غوغل',
    'sec.finish': 'تم',
    'submit.title': 'جاهز لإرسال تسجيلك؟',
    'submit.sub': 'اضغط الزر أدناه — سنتواصل معك قريباً.',
    'submit': 'إرسال',
    'thanks.title': 'شكراً لك!',
    'thanks.sub': 'تم استلام تسجيلك. نراك قريباً.',
    'yes': 'نعم', 'no': 'لا', 'na': 'لا ينطبق',
    'opt.female': 'أنثى', 'opt.male': 'ذكر', 'opt.other': 'أفضل عدم الإفصاح',
    'opt.friend': 'صديق / عائلة', 'opt.instagram': 'انستغرام', 'opt.facebook': 'فيسبوك',
    'opt.google': 'بحث غوغل', 'opt.tiktok': 'تيك توك', 'opt.walk': 'مرور / لافتة', 'opt.other2': 'أخرى',
    'opt.lv1': 'أقل من 6 أشهر', 'opt.lv2': '6 إلى 12 شهراً', 'opt.lv3': 'سنة إلى سنتين',
    'opt.lv4': 'أكثر من سنتين', 'opt.lv5': 'أبداً',
    'int.cleaning': 'التنظيف والعناية', 'int.whitening': 'التبييض', 'int.ortho': 'تقويم الأسنان',
    'int.implants': 'زراعة الأسنان', 'int.cosmetic': 'تجميل / فينير', 'int.pediatric': 'طب أسنان الأطفال',
    'int.rootcanal': 'علاج العصب', 'int.emergency': 'حالات الطوارئ',
    'opt.tm1': 'صباح أيام الأسبوع', 'opt.tm2': 'بعد ظهر أيام الأسبوع', 'opt.tm3': 'مساء أيام الأسبوع', 'opt.tm4': 'عطلة نهاية الأسبوع',
    'opt.ch1': 'واتساب', 'opt.ch2': 'مكالمة هاتفية', 'opt.ch3': 'رسالة نصية', 'opt.ch4': 'بريد إلكتروني',
    'opt.consentYes': 'نعم من فضلك', 'opt.consentNo': 'لا شكراً',
    'ph.typeHere': 'اكتب إجابتك هنا…',
    'ph.address': 'الشارع، المبنى، المنطقة، المدينة…',
    'ph.optionalTxt': 'اختياري…',
    'ph.companyName': 'اسم الشركة',
    'ph.occupation': 'المهنة',
    'alert.required': 'الرجاء الإجابة على هذا السؤال للمتابعة.',
    'alert.error': 'حدث خطأ. الرجاء المحاولة مجدداً.',
    'alert.copied': 'تم نسخ التقييم — جاري فتح غوغل…',
    'alert.noReview': 'الرجاء كتابة تقييمك أولاً.',
  },
};

let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      // 'enter' contains a <kbd>, others may have <kbd> too — allow HTML for these specific keys
      if (key === 'enter' || /<kbd>/.test(dict[key])) el.innerHTML = dict[key];
      else el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  try { localStorage.setItem('vv_lang', lang); } catch {}
}

// ====================================================================
// Slide navigation
// ====================================================================
let slides = [];
let idx = 0;

function showSlide(next, dir = 'forward') {
  const current = slides[idx];
  const target = slides[next];
  if (!target || current === target) return;
  current.classList.remove('active');
  target.classList.add('active');
  idx = next;
  updateProgress();
  updateNavButtons();
  setTimeout(focusActiveInput, 60);
}

function updateProgress() {
  // Welcome (idx 0) = 0%, last (thanks) = 100%
  const pct = Math.round((idx / (slides.length - 1)) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
}

function updateNavButtons() {
  document.getElementById('nav-prev').disabled = idx === 0;
  document.getElementById('nav-next').disabled = idx === slides.length - 1;
}

function focusActiveInput() {
  const slide = slides[idx];
  const input = slide.querySelector('input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]), textarea, select');
  if (input) input.focus({ preventScroll: false });
}

function currentSlideValid() {
  const slide = slides[idx];
  const required = slide.dataset.required === '1';
  const type = slide.dataset.type;

  if (!required) return true;

  if (type === 'single') {
    return !!slide.querySelector(`[data-name="${slide.dataset.step}"] input:checked`);
  }
  if (type === 'multi') return true; // multi never strictly required
  if (type === 'phone') {
    const input = slide.querySelector('input[type="tel"]');
    return input && input.value.trim().length >= 4;
  }
  const input = slide.querySelector('input:not([type="hidden"]), textarea');
  if (!input) return true;
  if (input.type === 'email' && input.value && !input.checkValidity()) return false;
  return input.value.trim().length > 0;
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2400);
}

function goNext() {
  if (!currentSlideValid()) {
    showToast(I18N[currentLang]['alert.required']);
    return;
  }
  if (idx < slides.length - 1) showSlide(idx + 1);
}

function goPrev() {
  if (idx > 0) showSlide(idx - 1);
}

// ====================================================================
// Letter-key shortcuts for choice slides (A, B, C, …)
// ====================================================================
function handleLetterKey(e) {
  const slide = slides[idx];
  const type = slide.dataset.type;
  if (type !== 'single' && type !== 'multi') return;

  const letter = e.key.toUpperCase();
  if (!/^[A-Z]$/.test(letter)) return;
  const choiceIdx = letter.charCodeAt(0) - 65;
  const choices = slide.querySelectorAll('.choice');
  const choice = choices[choiceIdx];
  if (!choice) return;
  e.preventDefault();
  const input = choice.querySelector('input');
  if (input.type === 'radio') {
    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  } else {
    input.checked = !input.checked;
  }
}

// ====================================================================
// Form data + submission
// ====================================================================
function collectData() {
  const data = {};
  // Inputs, selects, textareas
  document.querySelectorAll('.slide input[name], .slide select[name], .slide textarea[name]').forEach((el) => {
    const name = el.name;
    if (el.type === 'radio') {
      if (el.checked) data[name] = el.value;
    } else if (el.type === 'checkbox') {
      if (el.checked) {
        if (!Array.isArray(data[name])) data[name] = [];
        data[name].push(el.value);
      }
    } else if (el.value !== '') {
      data[name] = el.value;
    }
  });
  if (data.phone1) data.phone1Full = `${data.phone1Code || ''} ${data.phone1}`.trim();
  if (data.phone2) data.phone2Full = `${data.phone2Code || ''} ${data.phone2}`.trim();
  data._submittedAt = new Date().toISOString();
  data._language = currentLang;
  return data;
}

async function submitForm() {
  const payload = collectData();
  const btn = document.getElementById('submit-btn');
  btn.disabled = true; btn.style.opacity = '0.6';
  try {
    if (CONFIG.submitEndpoint) {
      const res = await fetch(CONFIG.submitEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Network');
    } else {
      console.log('[VV Form Submission]', payload);
      await new Promise((r) => setTimeout(r, 500));
    }
    showSlide(idx + 1);
  } catch {
    showToast(I18N[currentLang]['alert.error']);
    btn.disabled = false; btn.style.opacity = '';
  }
}

// ====================================================================
// Google review handoff
// ====================================================================
async function postToGoogle() {
  const reviewText = document.querySelector('textarea[name="reviewText"]').value.trim();
  if (!reviewText) {
    showToast(I18N[currentLang]['alert.noReview']);
    return;
  }
  try { await navigator.clipboard.writeText(reviewText); } catch {}
  showToast(I18N[currentLang]['alert.copied']);
  window.open(CONFIG.googleReviewUrl, '_blank', 'noopener');
}

// ====================================================================
// Star rating widget
// ====================================================================
function bindRating() {
  const widget = document.querySelector('.rating-big');
  if (!widget) return;
  const hidden = document.querySelector('input[type="hidden"][name="rating"]');
  const stars = widget.querySelectorAll('.star');
  let value = 0;

  const paint = (n) => stars.forEach((s, i) => s.classList.toggle('filled', i < n));

  stars.forEach((s, i) => {
    s.addEventListener('mouseenter', () => paint(i + 1));
    s.addEventListener('mouseleave', () => paint(value));
    s.addEventListener('click', () => {
      value = i + 1;
      hidden.value = value;
      paint(value);
    });
  });
}

// ====================================================================
// Init
// ====================================================================
document.addEventListener('DOMContentLoaded', () => {
  populateCountryCodes();

  let saved = 'en';
  try { saved = localStorage.getItem('vv_lang') || 'en'; } catch {}
  applyLanguage(saved);

  slides = Array.from(document.querySelectorAll('.slide'));
  updateProgress();
  updateNavButtons();

  // Language toggle
  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    b.addEventListener('click', () => applyLanguage(b.dataset.lang));
  });

  // OK / next buttons inside slides
  document.querySelectorAll('.go-next').forEach((b) => {
    b.addEventListener('click', goNext);
  });

  // Bottom nav
  document.getElementById('nav-prev').addEventListener('click', goPrev);
  document.getElementById('nav-next').addEventListener('click', goNext);

  // Auto-advance on single-choice radio selection (small delay)
  document.querySelectorAll('.slide[data-type="single"]').forEach((slide) => {
    slide.querySelectorAll('input[type="radio"]').forEach((r) => {
      r.addEventListener('change', () => {
        setTimeout(() => { if (slides[idx] === slide) goNext(); }, 320);
      });
    });
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    const target = e.target;
    const isTextarea = target.tagName === 'TEXTAREA';
    const isTextInput = (target.tagName === 'INPUT' && /^(text|tel|email|date)$/.test(target.type)) || target.tagName === 'SELECT';

    if (e.key === 'Enter') {
      if (isTextarea && !e.shiftKey) {
        // Allow newline in textarea unless Shift+Enter to advance
        // Following Typeform convention: Shift+Enter advances, plain Enter inserts newline
        return;
      }
      if (isTextarea && e.shiftKey) {
        e.preventDefault();
        goNext();
        return;
      }
      e.preventDefault();
      goNext();
      return;
    }

    // Letter-key only when not typing in a text field
    if (!isTextInput && !isTextarea) {
      handleLetterKey(e);
    }
  });

  // Submit button (final slide)
  document.getElementById('submit-btn').addEventListener('click', submitForm);

  // Google review
  document.getElementById('post-google').addEventListener('click', postToGoogle);

  // Rating
  bindRating();
});
