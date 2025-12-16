import logoImg from './logo.png'; 
import React, { useState, useEffect } from 'react';
import { 
  User, FileText, Play, AlertTriangle, History, Award, MessageSquare, X, CreditCard, 
  MapPin, CheckCircle, Clock, Star, Users, AlertCircle, ArrowLeft, BookOpen, Video, ChevronDown, Save,
  Smartphone, Receipt, Loader, Check, ShieldAlert, Building2, Globe, Trophy, Sun, Moon, Info, Phone, Mail, FileCheck, DollarSign, Camera, Lock, LogOut,
  Car, Truck, Leaf, Shield
} from 'lucide-react';

// --- 1. قاموس الترجمة (تم التحديث) ---
const translations = {
  ar: {
    trafficDept: "الإدارة العامة للمرور", // تمت الإضافة
    dashboardTitle: "المرور الإلكتروني",
    activeUser: "مستخدم نشط",
    points: "النقاط",
    inquiries: "استفسار",
    accountStatus: "الحالة",
    trainings: "التدريبات",
    violations: "المخالفات",
    accountInfo: "بيانات الحساب",
    licenses: "الرخص",
    trainingTracks: "مسارات التدريب",
    violationsFines: "المخالفات والغرامات",
    paymentHistory: "سجل المدفوعات",
    certifications: "تحميل الشهادات",
    scanCode: "امسح الكود للتحقق",
    beginner: "مبتدئ",
    intermediate: "متوسط",
    advanced: "متقدم",
    startTrack: "بدء المسار",
    continueTrack: "استكمال",
    start: "بدء",
    startCourse: "بدء الدورة",
    continueCourse: "استكمال",
    subscribe: "اشترك الآن",
    lessons: "درس",
    videos: "فيديو",
    payNow: "دفع",
    payFineTitle: "دفع الغرامة",
    payTrainingTitle: "دفع رسوم التدريب التأهيلي",
    payTraining: "دفع رسوم التدريب",
    pendingTraining: "بانتظار التدريب",
    startTraining: "بدء التدريب",
    paid: "خالص",
    unpaid: "غير مدفوع",
    fine_paid: "تم سداد الغرامة",
    training_needed: "مطلوب تدريب",
    training_completed: "تم التدريب",
    violationType: "نوع المخالفة",
    date: "التاريخ",
    status: "الحالة",
    action: "الإجراء",
    requestLicense: "تقديم طلب رخصة جديدة",
    active: "نشطة",
    licensePrivate: "رخصة قيادة خاصة",
    expireDate: "تاريخ الانتهاء",
    paymentProcessing: "جاري معالجة الدفع...",
    paymentSuccess: "تم الدفع بنجاح!",
    congrats: "أحسنت صنعاً!",
    congratsMsg: "نشكرك على حسن تعاونك وإتمام المسار التدريبي.",
    certIssued: "تم إصدار شهادة إتمام المسار.",
    downloadCert: "تحميل PDF",
    backHome: "العودة للرئيسية",
    finishTrack: "انتهيت من المسار التدريبي",
    courseContent: "محتوى المسار",
    aboutLesson: "عن هذا الدرس",
    exit: "خروج",
    completed: "مكتمل",
    overview: "نظرة عامة",
    learningGoals: "أهداف التعلم",
    introTrack: "مقدمة المسار",
    content: "المحتوى",
    reviews: "التقييمات",
    trainees: "متدرب",
    minutes: "دقيقة",
    choosePayment: "اختر وسيلة الدفع",
    totalDue: "الإجمالي المستحق",
    feesDetails: "تفاصيل الرسوم",
    adminFees: "مصاريف إدارية",
    basePrice: "القيمة الأساسية",
    payAtUnit: "الدفع في الإدارة",
    ePayment: "دفع إلكتروني",
    visa: "بطاقة بنكية",
    wallet: "محفظة إلكترونية",
    fawry: "فوري Pay",
    licenseFeeTitle: "رسوم استخراج رخصة قيادة",
    howToPayLicense: "كيف تفضل سداد رسوم استخراج الرخصة؟",
    requestSuccess: "تم تسجيل الطلب بنجاح",
    requestMsg: "يرجى الاحتفاظ برقم الطلب والتوجه إلى وحدة المرور المختصة لاستكمال الإجراءات.",
    close: "إغلاق",
    sendCode: "إرسال كود التحقق",
    confirmPay: "تأكيد ودفع",
    enterOTP: "أدخل كود OTP",
    cardNumber: "رقم البطاقة",
    cardName: "الاسم على البطاقة",
    walletNumber: "رقم المحفظة",
    fawryCode: "كود الدفع",
    simNewViolation: "محاكاة مخالفة جديدة (-20 نقطة)",
    sar: "ج.م",
    nidLabel: "الرقم القومي",
    governorate: "المحافظة",
    trafficUnit: "وحدة المرور التابع لها",
    addressDetails: "تفاصيل العنوان",
    street: "اسم الشارع",
    building: "رقم العقار / العمارة",
    area: "المنطقة / الحي",
    nextStep: "المتابعة للدفع الإلكتروني",
    selectGov: "اختر المحافظة",
    selectUnit: "اختر الوحدة",
    fullName: "الاسم رباعي",
    myViolations: "مخالفاتي وغراماتي",
    learnViolations: "تعرف على المخالفات",
    violationInfo: "معلومات المخالفة",
    penalty: "العقوبة المقررة",
    pointsDeduction: "خصم النقاط",
    licenseNumber: "رقم الرخصة",
    address: "العنوان",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    requestId: "رقم الطلب",
    keepId: "يرجى الاحتفاظ بهذا الرقم",
    licenseType: "نوع الرخصة",
    selectLicenseType: "اختر نوع الرخصة",
    lic_private: "رخصة خاصة",
    lic_first: "رخصة درجة أولى",
    lic_second: "رخصة درجة ثانية",
    lic_third: "رخصة درجة ثالثة",
    lic_moto: "رخصة دراجة نارية",
    assignedTraining: "التدريب المخصص للرخصة",
    startLicenseTraining: "ابدأ تدريب الرخصة الآن",
    violationTrainingTitle: "دورة تأهيل سلوكيات (إلزامية)",
    proceedToTrainingPayment: "سداد رسوم التدريب",
    login: "تسجيل الدخول",
    register: "إنشاء حساب جديد",
    createAccount: "إنشاء الحساب",
    dontHaveAccount: "ليس لديك حساب؟",
    haveAccount: "لديك حساب بالفعل؟",
    doYouHaveLicense: "هل تمتلك رخصة قيادة سابقة؟",
    yes: "نعم",
    no: "لا",
    uploadPhoto: "رفع صورة شخصية",
    signupTrainingRequired: "مرحلة إلزامية: تدريب الرخصة",
    proceedToPayCourse: "سداد وبدء التدريب",
    finishCourseToEnter: "أكمل التدريب للدخول للوحة التحكم",
    loginError: "بيانات غير صحيحة",
    back: "رجوع",
    profile: "الملف الشخصي",
    logout: "تسجيل الخروج",
    drivingLicenseTracks: "مسارات رخصة القيادة",
    vehicleLicenseTracks: "مسارات رخصة المركبة",
    drivingViolations: "مخالفات رخصة القيادة",
    vehicleViolations: "مخالفات رخصة المركبة",
    category_private: "رخصة خاصة",
    category_first: "درجة أولى",
    category_second: "درجة ثانية",
    category_third: "درجة ثالثة",
    category_pro: "رخصة مهنية",
    category_car: "رخصة سيارة",
    category_moto: "دراجة نارية",
    category_truck: "نقل ثقيل",
    category_safety: "سلامة المواطنين",
    category_env: "سلامة البيئة",
    pay_course_first: "يجب إنهاء التدريب أولاً لدفع الغرامة",
    quiz: "اختبار الفصل",
    course_1: "المستوى الأول",
    course_2: "المستوى الثاني",
    course_3: "المستوى الثالث",
    locked: "مغلق",
    unlock_fee: "رسوم المسار",
    amount: "القيمة",
    type_fine: "دفع غرامة",
    type_training: "دفع تدريب",
    type_track: "فتح مسار",
    type_license: "استخراج رخصة",
  },
  en: {
    trafficDept: "General Traffic Department", // Added
    dashboardTitle: "E-Traffic System",
    activeUser: "Active User",
    points: "Score",
    inquiries: "Inquiry",
    accountStatus: "Status",
    trainings: "Training",
    violations: "Violations",
    accountInfo: "Account Info",
    licenses: "Licenses",
    trainingTracks: "Training Tracks",
    violationsFines: "Violations & Fines",
    paymentHistory: "Payment History",
    certifications: "Certificates",
    scanCode: "Scan to Verify",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    startTrack: "Start Track",
    continueTrack: "Continue",
    start: "Start",
    startCourse: "Start Course",
    continueCourse: "Continue",
    subscribe: "Subscribe",
    lessons: "Lessons",
    videos: "Videos",
    payNow: "Pay",
    payFineTitle: "Pay Fine",
    payTrainingTitle: "Pay Rehab Training Fees",
    payTraining: "Pay Training Fees",
    pendingTraining: "Training Pending",
    startTraining: "Start Training",
    paid: "Cleared",
    unpaid: "Unpaid",
    fine_paid: "Fine Paid",
    training_needed: "Training Required",
    training_completed: "Training Done",
    violationType: "Violation Type",
    date: "Date",
    status: "Status",
    action: "Action",
    requestLicense: "Request New License",
    active: "Active",
    licensePrivate: "Private Driving License",
    expireDate: "Exp Date",
    paymentProcessing: "Processing Payment...",
    paymentSuccess: "Payment Successful!",
    congrats: "Well Done!",
    congratsMsg: "Thank you for completing the training track.",
    certIssued: "Certificate has been issued.",
    downloadCert: "Download PDF",
    backHome: "Back to Home",
    finishTrack: "Finish Training Track",
    courseContent: "Track Content",
    aboutLesson: "About this lesson",
    exit: "Exit",
    completed: "Completed",
    overview: "Overview",
    learningGoals: "Learning Goals",
    introTrack: "Track Intro",
    content: "Content",
    reviews: "Reviews",
    trainees: "Trainees",
    minutes: "Mins",
    choosePayment: "Choose Payment Method",
    totalDue: "Total Due",
    feesDetails: "Fee Details",
    adminFees: "Admin Fees",
    basePrice: "Base Price",
    payAtUnit: "Pay at Unit",
    ePayment: "E-Payment",
    visa: "Credit Card",
    wallet: "E-Wallet",
    fawry: "Fawry Pay",
    licenseFeeTitle: "Driving License Fees",
    howToPayLicense: "How would you like to pay?",
    requestSuccess: "Request Submitted",
    requestMsg: "Please keep the Request ID and proceed to the traffic unit to finalize.",
    close: "Close",
    sendCode: "Send Code",
    confirmPay: "Confirm & Pay",
    enterOTP: "Enter OTP",
    cardNumber: "Card Number",
    cardName: "Cardholder Name",
    walletNumber: "Wallet Number",
    fawryCode: "Payment Code",
    simNewViolation: "Simulate Violation (-20 pts)",
    sar: "EGP",
    nidLabel: "National ID",
    governorate: "Governorate",
    trafficUnit: "Traffic Unit",
    addressDetails: "Address Details",
    street: "Street Name",
    building: "Building No.",
    area: "Area / District",
    nextStep: "Proceed to Online Payment",
    selectGov: "Select Governorate",
    selectUnit: "Select Unit",
    fullName: "Full Name",
    myViolations: "My Violations & Fines",
    learnViolations: "Learn about Violations",
    violationInfo: "Violation Info",
    penalty: "Penalty",
    pointsDeduction: "Points Deduction",
    licenseNumber: "License No.",
    address: "Address",
    email: "Email",
    phone: "Phone",
    requestId: "Request ID",
    keepId: "Please keep this ID",
    licenseType: "License Type",
    selectLicenseType: "Select License Type",
    lic_private: "Private License",
    lic_first: "First Class License",
    lic_second: "Second Class License",
    lic_third: "Third Class License",
    lic_moto: "Motorcycle License",
    assignedTraining: "Assigned Training",
    startLicenseTraining: "Start License Training",
    violationTrainingTitle: "Behavioral Rehab Course (Mandatory)",
    proceedToTrainingPayment: "Pay Training Fees",
    login: "Login",
    register: "Register",
    createAccount: "Create Account",
    dontHaveAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    doYouHaveLicense: "Do you have an existing license?",
    yes: "Yes",
    no: "No",
    uploadPhoto: "Upload Photo",
    signupTrainingRequired: "Mandatory Stage: License Training",
    proceedToPayCourse: "Pay & Start Training",
    finishCourseToEnter: "Complete training to access dashboard",
    loginError: "Incorrect data",
    back: "Back",
    profile: "Profile",
    logout: "Logout",
    drivingLicenseTracks: "Driving License Tracks",
    vehicleLicenseTracks: "Vehicle License Tracks",
    drivingViolations: "Driving License Violations",
    vehicleViolations: "Vehicle License Violations",
    category_private: "Private License",
    category_first: "1st Class",
    category_second: "2nd Class",
    category_third: "3rd Class",
    category_pro: "Professional",
    category_car: "Car License",
    category_moto: "Motorcycle",
    category_truck: "Heavy Truck",
    category_safety: "Citizen Safety",
    category_env: "Eco Safety",
    pay_course_first: "Must finish rehab training first",
    quiz: "Chapter Quiz",
    course_1: "Level 1",
    course_2: "Level 2",
    course_3: "Level 3",
    locked: "Locked",
    unlock_fee: "Track Fee",
    amount: "Amount",
    type_fine: "Fine Payment",
    type_training: "Training Payment",
    type_track: "Track Unlock",
    type_license: "License Request",
  }
};

// --- 2. البيانات الثابتة ---
const initialUserData = {
  name: "محمد أحمد محمود",
  nid: "29001011234567",
  email: "mohamed@egybod.gov.eg",
  phone: "01000000000",
  address: "15 شارع الثورة، مصر الجديدة",
  licensePlate: "أ ب ج 123",
  licenseNumber: "882211",
  governorate: "القاهرة",
  unit: "وحدة مرور مدينة نصر",
  img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
};

const tracksStructure = {
    driving: [
        { id: 'private', icon: <Car />, label_key: 'category_private', price: 1500 },
        { id: 'first', icon: <Truck />, label_key: 'category_first', price: 3000 },
        { id: 'second', icon: <Truck />, label_key: 'category_second', price: 2500 },
        { id: 'third', icon: <Truck />, label_key: 'category_third', price: 2000 },
        { id: 'pro', icon: <Award />, label_key: 'category_pro', price: 4000 },
        { id: 'moto', icon: <Smartphone />, label_key: 'category_moto', price: 1000 },
    ],
    vehicle: [
        { id: 'safety', icon: <Shield />, label_key: 'category_safety', price: 500 },
        { id: 'env', icon: <Leaf />, label_key: 'category_env', price: 400 },
    ]
};

const trackCoursesData = {
    courses: [
        { id: 1, title_ar: "دورة المبتدئين: القواعد الأساسية", title_en: "Beginner: Basic Rules", duration: "5 hrs", lessons: 8 },
        { id: 2, title_ar: "دورة المتوسط: القيادة الدفاعية", title_en: "Intermediate: Defensive Driving", duration: "10 hrs", lessons: 12 },
        { id: 3, title_ar: "دورة المتقدم: التعامل مع الطوارئ", title_en: "Advanced: Emergency Handling", duration: "8 hrs", lessons: 10 },
    ]
};

const marketCourses = [
  { id: 101, level: 'beginner', title: 'الرخصة في جيبك: تعلم الإشارات', instructor: 'كابتن/ ياسر', rating: 4.8, students: 1200, price: 150, img: 'https://img.freepik.com/free-vector/driving-school-illustration_1284-11056.jpg' },
  { id: 102, level: 'beginner', title: 'مبادئ الميكانيكا والاعطال', instructor: 'م/ أحمد', rating: 4.5, students: 850, price: 200, img: 'https://img.freepik.com/free-vector/car-service-abstract-concept-illustration_335657-1834.jpg' },
  { id: 201, level: 'intermediate', title: 'فن القيادة في الزحام', instructor: 'كابتن/ سارة', rating: 4.9, students: 2100, price: 300, img: 'https://img.freepik.com/free-vector/traffic-jam-concept-illustration_114360-1567.jpg' },
  { id: 202, level: 'intermediate', title: 'الركن (الاصطفاف) باحترافية', instructor: 'كابتن/ محمد', rating: 4.7, students: 1500, price: 250, img: 'https://img.freepik.com/free-vector/parking-concept-illustration_114360-6725.jpg' },
  { id: 301, level: 'advanced', title: 'القيادة الدفاعية وتفادي الحوادث', instructor: 'لواء/ محمود', rating: 5.0, students: 500, price: 600, img: 'https://img.freepik.com/free-vector/car-crash-concept-illustration_114360-8452.jpg' },
];

const violationTypesInfo = [
    { id: 'speeding', title_ar: "تجاوز السرعة المقررة", title_en: "Speeding", desc_ar: "القيادة بسرعة تتجاوز الحد المسموح به.", penalty_ar: "300 - 1500 جم", points: 20, img: "https://img.freepik.com/free-vector/speed-limit-concept-illustration_114360-3456.jpg" },
    { id: 'red_light', title_ar: "كسر الإشارة الضوئية", title_en: "Running Red Light", desc_ar: "عدم التوقف عند الإشارة الحمراء.", penalty_ar: "500 - 1000 جم", points: 15, img: "https://img.freepik.com/free-vector/traffic-light-concept-illustration_114360-5678.jpg" },
    { id: 'phone', title_ar: "استخدام الهاتف", title_en: "Phone Usage", desc_ar: "استخدام الهاتف باليد أثناء القيادة.", penalty_ar: "100 - 300 جم", points: 10, img: "https://img.freepik.com/free-vector/texting-driving-concept-illustration_114360-9988.jpg" },
    { id: 'seatbelt', title_ar: "حزام الأمان", title_en: "Seatbelt", desc_ar: "عدم ارتداء حزام الأمان.", penalty_ar: "100 - 300 جم", points: 5, img: "https://img.freepik.com/free-vector/seatbelt-concept-illustration_114360-2211.jpg" },
];

const initialViolations = [
  { id: 101, name_ar: "تجاوز السرعة المقررة", name_en: "Speeding Violation", date: "2024-01-15", status: "unpaid", amount: 500, trainingRequired: true, trainingStatus: "none", type: 'driving' },
  { id: 102, name_ar: "كسر إشارة", name_en: "Running Red Light", date: "2024-02-01", status: "paid", amount: 1000, trainingRequired: false, trainingStatus: "completed", type: 'driving' },
  { id: 103, name_ar: "انبعاثات كربونية عالية", name_en: "High Carbon Emissions", date: "2024-03-10", status: "unpaid", amount: 2000, trainingRequired: true, trainingStatus: "none", type: 'vehicle' },
];

const courseSyllabus = [
  { module_ar: "01 مقدمة عامة", module_en: "01 General Intro", lessons: [{ title_ar: "مرحباً بك", title_en: "Welcome", type: "video" }, { title_ar: "الأهداف", title_en: "Goals", type: "text" }] },
  { module_ar: "02 أساسيات الطريق", module_en: "02 Road Basics", lessons: [{ title_ar: "الإشارات", title_en: "Signals", type: "video" }, { title_ar: "الخطوط", title_en: "Lines", type: "text" }] },
  { module_ar: "03 الاختبار", module_en: "03 Quiz", lessons: [{ title_ar: "اختبار الفصل", title_en: "Chapter Quiz", type: "quiz" }] }
];

// --- Helper Functions ---
const getTheme = (isDark) => ({
  bgMain: isDark ? 'bg-[#0B1B32]' : 'bg-gray-50',
  bgCard: isDark ? 'bg-[#152D4F]' : 'bg-white',
  bgHeader: isDark ? 'bg-[#061121]' : 'bg-white',
  bgSub: isDark ? 'bg-[#0B1B32]' : 'bg-gray-100',
  textMain: isDark ? 'text-white' : 'text-gray-900',
  textSub: isDark ? 'text-gray-400' : 'text-gray-500',
  border: isDark ? 'border-gray-600' : 'border-gray-200',
  input: isDark ? 'bg-[#0B1B32] border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900',
  hover: isDark ? 'hover:bg-[#1e3a63]' : 'hover:bg-gray-100',
  shadow: isDark ? 'shadow-2xl' : 'shadow-lg',
  goldText: 'text-[#D4AF37]',
  goldBg: 'bg-[#D4AF37]',
  goldBorder: 'border-[#D4AF37]',
});

// --- Components ---
const StatusIndicator = ({ status }) => <div className="flex gap-2 p-2 rounded-lg border border-transparent shadow-inner bg-opacity-20 bg-gray-500"><div title="Status" className={`w-4 h-4 rounded-full transition-all duration-500 ${status === 'success' ? 'bg-green-500 shadow-[0_0_15px_green]' : 'bg-red-900 opacity-30'}`}></div></div>;
const ProgressBar = ({ percentage, isDark }) => <div className={`w-full h-3 rounded-full overflow-hidden border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'}`}><div className="bg-[#D4AF37] h-full transition-all duration-1000 ease-out shadow-[0_0_10px_#D4AF37]" style={{ width: `${percentage}%` }}></div></div>;
const ChatInterface = ({ onClose, theme }) => <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"><div className={`${theme.bgCard} w-full max-w-2xl h-[600px] rounded-xl border-2 ${theme.goldBorder} flex flex-col shadow-2xl relative animate-zoomIn`}><button onClick={onClose} className={`absolute top-4 left-4 ${theme.textMain} hover:text-red-500 transition hover:rotate-90 duration-300`}><X size={24}/></button><div className={`p-4 border-b ${theme.border}`}><h3 className={`${theme.goldText} text-xl font-bold flex items-center gap-2`}><MessageSquare className="animate-bounce"/> المساعد الذكي</h3></div><div className="flex-1 p-4 overflow-y-auto space-y-4"><div className={`${theme.bgSub} p-3 rounded-lg ${theme.textMain} max-w-[80%] border ${theme.border}`}>مرحباً، كيف يمكنني مساعدتك اليوم؟</div></div><div className={`p-4 border-t ${theme.border} flex gap-2`}><input type="text" placeholder="اكتب سؤالك هنا..." className={`flex-1 ${theme.input} p-3 rounded-lg focus:border-[#D4AF37] outline-none`} /><button className={`${theme.goldBg} text-black px-6 rounded-lg font-bold`}>إرسال</button></div></div></div>;
const ModalFrame = ({ title, children, onClose, theme, onBack }) => <div className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"><div className={`${theme.bgMain} w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 ${theme.goldBorder} shadow-[0_0_30px_rgba(212,175,55,0.2)] animate-zoomIn relative`}><div className={`sticky top-0 ${theme.bgHeader} p-4 border-b ${theme.goldBorder} flex justify-between items-center z-10`}><div className="flex items-center gap-2">{onBack && <button onClick={onBack} className={`${theme.textSub} hover:text-white transition`}><ArrowLeft /></button>}<h2 className={`text-2xl font-bold ${theme.goldText} drop-shadow-sm`}>{title}</h2></div><button onClick={onClose} className="bg-red-900/50 hover:bg-red-600 text-white p-2 rounded-full transition-all hover:rotate-90"><X size={20} /></button></div><div className={`p-6 ${theme.textMain} text-right`} dir="rtl">{children}</div></div></div>;

const CourseIntroPage = ({ course, onStart, onBack, t, lang, theme, isDark }) => (
  <div className={`min-h-screen ${theme.bgMain} font-sans animate-fadeIn ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8 md:p-12 relative overflow-hidden shadow-xl">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center relative z-10">
        <div className={`w-full md:w-1/3 max-w-[300px] ${theme.bgCard} rounded-xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition duration-700 ease-in-out hover:scale-105`}><div className={`border ${theme.border} rounded-lg p-4 flex flex-col items-center ${theme.textMain} ${theme.bgCard}`}><img src={course.img} alt="cover" className="w-full h-32 object-cover rounded mb-4" /><h2 className="font-bold text-xl text-center mb-1">{lang === 'ar' ? course.title_ar : course.title_en}</h2><span className={`bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2`}>{t[course.level] || course.level}</span><div className="w-full mt-2"><ProgressBar percentage={course.progress} isDark={isDark} /></div><span className={`text-xs ${theme.textSub} mt-1`}>{course.progress}% {t.completed}</span></div></div>
        <div className={`flex-1 text-center ${lang === 'ar' ? 'md:text-right' : 'md:text-left'} animate-slideUp`}><h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">{lang === 'ar' ? course.title_ar : course.title_en} V2.0</h1><div className={`flex flex-wrap gap-6 text-blue-100 text-sm mb-8 justify-center ${lang === 'ar' ? 'md:justify-start' : 'md:justify-start'}`}><div className="flex items-center gap-1 hover:text-white transition"><Star size={16} className="text-yellow-400 fill-yellow-400 animate-pulse"/> 4.8</div><div className="flex items-center gap-1 hover:text-white transition"><Users size={16}/> 12,540 {t.trainees}</div><div className="flex items-center gap-1 hover:text-white transition"><Clock size={16}/> 300 {t.minutes}</div></div>
        <div className={`flex gap-4 justify-center ${lang === 'ar' ? 'md:justify-start' : 'md:justify-start'}`}>
            <button onClick={onStart} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg transform hover:scale-110 active:scale-95 duration-200">
                {course.progress > 0 ? t.continueTrack : t.start}
            </button>
            <button onClick={onBack} className="bg-blue-700/50 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition border border-blue-300 transform hover:scale-105 active:scale-95">{t.backHome}</button>
        </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto p-6 -mt-8 relative z-20 animate-slideUp" style={{animationDelay: '0.2s'}}><div className={`${theme.bgCard} rounded-xl shadow-lg border ${theme.border} overflow-hidden`}><div className={`flex border-b ${theme.border} ${theme.bgSub}`}><button className={`px-6 py-4 ${theme.goldText} border-b-2 ${theme.goldBorder} font-bold ${theme.bgCard} transition`}>{t.introTrack}</button><button className={`px-6 py-4 ${theme.textSub} hover:${theme.textMain} hover:${theme.bgSub} transition`}>{t.content}</button></div><div className="p-8"><h3 className={`text-xl font-bold mb-4 ${theme.textMain}`}>{t.overview}</h3><p className={`${theme.textSub} leading-relaxed mb-6`}>TEXT PLACEHOLDER</p><h3 className={`text-xl font-bold mb-4 ${theme.textMain}`}>{t.learningGoals}</h3><ul className={`space-y-2 ${theme.textSub}`}><li className="flex items-center gap-2 hover:translate-x-2 transition duration-300"><CheckCircle size={16} className="text-green-500"/> Rule 1</li></ul></div></div></div>
  </div>
);

const LearningInterface = ({ course, onBack, onComplete, t, lang, theme, isDark }) => {
  const [activeLesson, setActiveLesson] = useState(lang === 'ar' ? "مقدمة" : "Intro");
  return (
    <div className={`flex flex-col h-screen ${theme.bgMain} font-sans animate-fadeIn ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`h-16 ${theme.bgHeader} border-b ${theme.border} flex items-center justify-between px-6 shadow-sm z-20 sticky top-0`}><div className="flex items-center gap-4"><button onClick={onBack} className={`${theme.textSub} hover:text-blue-600 flex items-center gap-1 text-sm font-bold border ${theme.border} px-3 py-1 rounded ${theme.hover} transition transform hover:scale-105`}><ArrowLeft size={16} className={lang === 'en' ? 'rotate-180' : ''}/> {t.exit}</button><div className={`h-6 w-px ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div><h2 className={`font-bold text-lg ${theme.textMain}`}>{lang === 'ar' ? (course.title_ar || course.title) : (course.title_en || course.title)}</h2></div><div className="flex items-center gap-3"><div className={`text-sm ${theme.textSub} font-bold`}>{course.progress}%</div><div className="w-40"><ProgressBar percentage={course.progress} isDark={isDark} /></div></div></div>
      <div className="flex flex-1 overflow-hidden"><div className={`w-80 ${theme.bgSub} ${lang === 'ar' ? 'border-l' : 'border-r'} ${theme.border} flex flex-col`}><div className={`p-4 border-b ${theme.border} ${theme.bgCard}`}><h3 className={`font-bold ${theme.textMain} flex items-center gap-2`}><BookOpen size={18}/> {t.courseContent}</h3></div><div className="flex-1 overflow-y-auto">{courseSyllabus.map((module, idx) => (<div key={idx} className={`border-b ${theme.border}`}><div className={`p-4 ${theme.bgSub} font-bold text-sm ${theme.textMain} flex justify-between cursor-pointer ${theme.hover} border-b ${isDark?'border-transparent':'border-white'} transition-colors`}>{lang === 'ar' ? module.module_ar : module.module_en} <ChevronDown size={16}/></div><div>{module.lessons.map((lesson, lIdx) => (<div key={lIdx} onClick={() => setActiveLesson(lang === 'ar' ? lesson.title_ar : lesson.title_en)} className={`p-3 pr-6 flex items-center justify-between cursor-pointer text-sm transition-all duration-300 ${lang === 'ar' ? 'border-l-4 hover:pl-4' : 'border-r-4 hover:pr-4'} bg-blue-50 text-blue-700 font-bold border-blue-600`}><div className="flex items-center gap-2">{lesson.type === 'video' ? <Video size={14}/> : (lesson.type === 'quiz' ? <FileCheck size={14}/> : <FileText size={14}/>)}{lang === 'ar' ? lesson.title_ar : lesson.title_en}</div></div>))}</div></div>))}</div><div className={`p-4 border-t ${theme.border} ${theme.bgCard} z-10 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]`}><button onClick={onComplete} className={`w-full ${theme.goldBg} text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition shadow-lg flex items-center justify-center gap-2 transform hover:scale-[1.02]`}><CheckCircle size={20} className="text-black"/> {t.finishTrack}</button></div></div><div className={`flex-1 ${theme.bgMain} p-8 overflow-y-auto flex flex-col items-center`}><div className={`${theme.bgCard} w-full max-w-4xl min-h-[500px] rounded-xl shadow-lg border ${theme.border} p-0 overflow-hidden animate-zoomIn`}><div className={`p-6 border-b ${theme.border}`}><h1 className={`text-2xl font-bold ${theme.textMain}`}>{activeLesson}</h1></div><div className="p-8 space-y-6"><div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-white relative group cursor-pointer shadow-lg overflow-hidden"><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-125 transition duration-300 z-10"><Play size={32} fill="white" className="ml-1"/></div></div><div className={`prose max-w-none ${theme.textSub}`}><h3 className={`text-lg font-bold ${theme.textMain} mb-2`}>{t.aboutLesson}</h3><p>...</p></div></div></div></div></div>
    </div>
  );
};

const CompletionModal = ({ onClose, t, theme }) => (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn"><div className={`${theme.bgCard} border-2 ${theme.goldBorder} p-8 rounded-2xl text-center max-w-md w-full shadow-[0_0_50px_rgba(212,175,55,0.3)] animate-zoomIn`}><div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"><Award className="text-white w-12 h-12 animate-bounce"/></div><h2 className={`text-2xl font-bold ${theme.textMain} mb-2`}>{t.congrats}</h2><p className={`${theme.textSub} mb-6`}>{t.congratsMsg}</p><div className={`${theme.bgSub} p-4 rounded-lg border border-dashed border-gray-500 mb-6`}><p className={`${theme.goldText} text-sm`}>{t.certIssued}</p><p className="text-gray-400 text-xs">{t.downloadCert}</p></div><button onClick={onClose} className={`w-full ${theme.goldBg} text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition`}>{t.backHome}</button></div></div>
);

// --- 4. التطبيق الرئيسي (Dashboard) ---
export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState('login'); 
  const [authInputs, setAuthInputs] = useState({});

  const [lang, setLang] = useState('ar'); 
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const [points, setPoints] = useState(0); 
  const t = translations[lang];
  const theme = getTheme(isDarkMode); 
  const lightTheme = getTheme(false); 

  const [userStatus] = useState('success');
  const [userData, setUserData] = useState(initialUserData);

  const [activeModal, setActiveModal] = useState(null); 
  const [selectedLevel, setSelectedLevel] = useState(null); 
  const [selectedPayment, setSelectedPayment] = useState(null); 
  
  const [showLicenseForm, setShowLicenseForm] = useState(false);
  const [requestId, setRequestId] = useState(null); 
  
  // Dropdown States
  const [isTrainingMenuOpen, setIsTrainingMenuOpen] = useState(false);
  const [isViolationsMenuOpen, setIsViolationsMenuOpen] = useState(false); 
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  const [menuTimer, setMenuTimer] = useState(null);
  const [violationsMenuTimer, setViolationsMenuTimer] = useState(null); 
  const [profileMenuTimer, setProfileMenuTimer] = useState(null);

  const [paymentStep, setPaymentStep] = useState('summary'); 
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [payingItem, setPayingItem] = useState(null); 
  
  // New Logic States
  const [violations, setViolations] = useState(initialViolations);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]); // سجل المدفوعات الديناميكي
  
  const [trainingCategory, setTrainingCategory] = useState(null); 
  const [selectedTrack, setSelectedTrack] = useState(null); 
  const [violationCategory, setViolationCategory] = useState(null); 
  const [userTracks, setUserTracks] = useState({});

  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedViolationInfo, setSelectedViolationInfo] = useState(null); 
  const [showCompletion, setShowCompletion] = useState(false);

  const [licenseFormData, setLicenseFormData] = useState({
    nid: userData.nid, 
    governorate: '',
    unit: '',
    street: '',
    building: '',
    area: '',
    licenseType: '' 
  });

  // --- Auth Handlers ---
  const handleLogin = (e) => {
      e.preventDefault();
      if(authInputs.name && authInputs.license) {
          setUserData({...initialUserData, name: authInputs.name, licenseNumber: authInputs.license });
          setIsLoggedIn(true);
      } else {
          alert(t.loginError);
      }
  };

  const handleRegisterHasLicense = (e) => {
      e.preventDefault();
      setUserData({ ...initialUserData, ...authInputs });
      setIsLoggedIn(true);
  };

  const handleRegisterNoLicenseSubmit = (e) => {
      e.preventDefault();
      setUserData({ ...initialUserData, ...authInputs, licenseNumber: 'NEW' });
      setIsLoggedIn(true);
      setAuthView('login'); 
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      setAuthView('login');
      setIsProfileMenuOpen(false);
      setUserData(initialUserData);
      setCurrentView('dashboard'); 
  };

  // --- Functions for Old Logic compatibility ---
  const handleCourseClick = (course) => {
    if (course.progress > 0 || purchasedCourses.includes(course.id) || course.price === 0) {
      setSelectedCourse(course); setActiveModal(null); setCurrentView('course_details');
    } else {
      setPayingItem({ ...course, type: 'course' }); setPaymentStep('summary'); setPaymentMethod(null); setActiveModal('payment_modal');
    }
  };

  const handleLevelSelection = (level) => {
    setIsTrainingMenuOpen(false); 
    if (menuTimer) clearTimeout(menuTimer); 
    setActiveModal('training');
  };

  const handleViolationInfoClick = (info) => { setSelectedViolationInfo(info); setIsViolationsMenuOpen(false); setActiveModal('violation_info'); };

  // --- Dropdown Handlers ---
  const handleTrainingMouseEnter = () => { if (menuTimer) clearTimeout(menuTimer); setIsTrainingMenuOpen(true); };
  const handleTrainingMouseLeave = () => { const timer = setTimeout(() => { setIsTrainingMenuOpen(false); }, 1000); setMenuTimer(timer); };
  const handleViolationsMouseEnter = () => { if (violationsMenuTimer) clearTimeout(violationsMenuTimer); setIsViolationsMenuOpen(true); };
  const handleViolationsMouseLeave = () => { const timer = setTimeout(() => { setIsViolationsMenuOpen(false); }, 1000); setViolationsMenuTimer(timer); };
  const handleProfileMouseEnter = () => { if (profileMenuTimer) clearTimeout(profileMenuTimer); setIsProfileMenuOpen(true); };
  const handleProfileMouseLeave = () => { const timer = setTimeout(() => { setIsProfileMenuOpen(false); }, 500); setProfileMenuTimer(timer); };

  // --- New Logic Handlers ---
  const handleTrackPurchase = (track, category) => {
      const trackKey = `${category}_${track.id}`;
      setPayingItem({ 
          id: trackKey, 
          title: t[track.label_key],
          price: track.price, 
          type: 'track_unlock',
          meta: { trackId: track.id, category: category }
      });
      setPaymentStep('summary');
      setPaymentMethod(null);
      setActiveModal('payment_modal');
  };

  const handleViolationPayClick = (violation) => { 
    setPayingItem({ 
        id: violation.id,
        title: t.payFineTitle, 
        price: violation.amount, 
        type: 'violation_fine',
        meta: { violationId: violation.id }
    });
    setPaymentStep('input_details'); setPaymentMethod(null); setActiveModal('payment_modal');
  };

  const handleFinePayFromTable = (violation) => { 
      // Ensure training is completed
      if (violation.trainingStatus !== 'completed' && violation.trainingStatus !== 'none') return;
      setPayingItem({
          id: violation.id,
          title: t.payFineTitle,
          price: violation.amount,
          type: 'violation_fine', 
          meta: { violationId: violation.id }
      });
      setPaymentStep('summary'); 
      setPaymentMethod(null);
      setActiveModal('payment_modal');
  };

  const handlePayViolationTraining = (violation) => {
      const vid = violation.id || payingItem?.id;
      setPayingItem({ 
          id: `train_${vid}`, 
          violationId: vid, 
          title: t.payTrainingTitle, 
          price: 200, // Training cost
          type: 'violation_training' 
      });
      setPaymentStep('summary'); setPaymentMethod(null); setActiveModal('payment_modal');
  };

  const handleLicenseFormSubmit = () => { 
      setShowLicenseForm(false); 
      setPayingItem({ type: 'new_license', title: t.licenseFeeTitle, price: 950, licenseType: licenseFormData.licenseType }); 
      setPaymentStep('summary'); setPaymentMethod(null); setActiveModal('payment_modal'); 
  };

  const processPayment = () => {
    setPaymentStep('processing');
    setTimeout(() => {
        setPaymentStep('success');
        const today = new Date().toISOString().split('T')[0];

        // Add to payment history
        const newHistoryItem = {
          id: Math.random(),
          title: payingItem.title,
          amount: payingItem.price || payingItem.amount,
          date: today,
          type: payingItem.type
        };
        setPaymentHistory(prev => [newHistoryItem, ...prev]);
        
        if (payingItem.type === 'track_unlock') {
            const { trackId, category } = payingItem.meta;
            const trackKey = `${category}_${trackId}`;
            setUserTracks(prev => ({
                ...prev,
                [trackKey]: { unlocked: true, currentCourse: 1, coursesProgress: {1: 0, 2: 0, 3: 0} }
            }));
        } 
        else if (payingItem.type === 'violation_training') {
            setViolations(prev => prev.map(v => v.id === payingItem.violationId ? { ...v, trainingStatus: 'ready_to_start' } : v));
        }
        else if (payingItem.type === 'violation_fine') {
             const vid = payingItem.meta ? payingItem.meta.violationId : payingItem.id;
             setViolations(prev => prev.map(v => v.id === vid ? { ...v, status: 'paid' } : v));
        }
        else if (payingItem.type === 'course') {
             setPurchasedCourses([...purchasedCourses, payingItem.id]);
        }
        else if (payingItem.type === 'new_license') setRequestId(Math.floor(100000 + Math.random() * 900000));
    }, 2000);
  };

  const startTrackCourse = (trackId, category, courseLevel) => {
     const trackKey = `${category}_${trackId}`;
     const trackData = userTracks[trackKey];
     const courseInfo = trackCoursesData.courses[courseLevel - 1]; 

     if (courseLevel > 1 && trackData.coursesProgress[courseLevel-1] < 100) return; 

     setSelectedCourse({
         ...courseInfo,
         progress: trackData.coursesProgress[courseLevel],
         trackKey: trackKey,
         levelIndex: courseLevel
     });
     setActiveModal(null);
     setCurrentView('course_details');
  };

  const startViolationTraining = (violation) => {
    const violationCourse = { 
        id: `viol_${violation.id}`, 
        title_ar: `دورة تأهيل: ${violation.name_ar}`, 
        title_en: `Rehab Course: ${violation.name_en}`, 
        level: 'mandatory', 
        progress: 0, 
        img: 'https://img.freepik.com/free-vector/policeman-writing-fine-drivers_1308-30644.jpg', 
        violationId: violation.id,
        isViolation: true 
    };
    setSelectedCourse(violationCourse); setActiveModal(null); setPayingItem(null); setCurrentView('course_details');
  };

  const startLicenseTraining = (licenseType) => {
      const courseInfo = trackCoursesData.courses[0];
      setSelectedCourse({ ...courseInfo, progress: 0 }); 
      setActiveModal(null); setRequestId(null); setPayingItem(null);
      setCurrentView('course_details');
  };

  const handleFinishTrack = () => {
    setShowCompletion(true);
    setPoints(prev => prev + 50); 
    
    if (selectedCourse.isViolation) {
        // Mark violation training as completed
        setViolations(prev => prev.map(v => v.id === selectedCourse.violationId ? { ...v, trainingStatus: 'completed' } : v));
    } else if (selectedCourse.trackKey) {
         const { trackKey, levelIndex } = selectedCourse;
         setUserTracks(prev => ({
             ...prev,
             [trackKey]: {
                 ...prev[trackKey],
                 coursesProgress: { ...prev[trackKey].coursesProgress, [levelIndex]: 100 },
                 currentCourse: levelIndex < 3 ? levelIndex + 1 : 3
             }
         }));
    }
  };

  const simulateNewViolation = () => { setPoints(prev => prev - 20 > 0 ? prev - 20 : 0); alert(lang === 'ar' ? "تم تسجيل مخالفة جديدة! تم خصم 20 نقطة." : "New violation recorded! 20 points deducted."); };

  const customStyles = `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes zoomIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
    .animate-slideUp { animation: slideUp 0.5s ease-out forwards; }
    .animate-zoomIn { animation: zoomIn 0.3s ease-out forwards; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
  `;

  // --- AUTH SCREEN ---
  if (!isLoggedIn) {
      return (
          <div className={`min-h-screen ${theme.bgMain} flex items-center justify-center p-4 relative overflow-hidden`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <style>{customStyles}</style>
              <div className="absolute inset-0 bg-[#D4AF37] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
              <div className={`${theme.bgCard} w-full max-w-lg rounded-2xl border-2 ${theme.goldBorder} shadow-[0_0_40px_rgba(212,175,55,0.15)] p-8 relative z-10 animate-zoomIn flex flex-col`}>
                  <div className="flex flex-col items-center mb-8"><img src={logoImg} alt="Logo" className="w-32 h-32 object-contain mb-4 drop-shadow-xl animate-float" /><h1 className={`text-3xl font-bold ${theme.goldText} tracking-wide text-center`}>{t.dashboardTitle}</h1></div>
                  {authView === 'login' && (<form onSubmit={handleLogin} className="space-y-6 animate-fadeIn"><h2 className={`text-xl font-bold ${theme.textMain} text-center`}>{t.login}</h2><div className="space-y-4"><input type="text" placeholder={t.fullName} className={`w-full ${theme.input} p-4 rounded-xl focus:border-[#D4AF37] outline-none transition`} onChange={(e) => setAuthInputs({...authInputs, name: e.target.value})}/><input type="text" placeholder={t.licenseNumber} className={`w-full ${theme.input} p-4 rounded-xl focus:border-[#D4AF37] outline-none transition`} onChange={(e) => setAuthInputs({...authInputs, license: e.target.value})}/></div><button type="submit" className={`w-full ${theme.goldBg} text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition shadow-lg transform hover:scale-[1.02]`}>{t.login}</button><p className={`text-center ${theme.textSub} text-sm mt-4`}>{t.dontHaveAccount} <button type="button" onClick={() => setAuthView('register_choice')} className={`${theme.goldText} font-bold hover:underline`}>{t.register}</button></p></form>)}
                  {authView === 'register_choice' && (<div className="space-y-6 animate-fadeIn text-center"><h2 className={`text-xl font-bold ${theme.textMain}`}>{t.doYouHaveLicense}</h2><div className="grid grid-cols-2 gap-4"><button onClick={() => setAuthView('register_has_license')} className={`p-6 rounded-xl border-2 ${theme.border} hover:border-[#D4AF37] ${theme.hover} transition flex flex-col items-center gap-2 group`}><CheckCircle className="text-green-500 group-hover:scale-110 transition" size={32}/><span className={`font-bold ${theme.textMain}`}>{t.yes}</span></button><button onClick={() => setAuthView('register_no_license')} className={`p-6 rounded-xl border-2 ${theme.border} hover:border-[#D4AF37] ${theme.hover} transition flex flex-col items-center gap-2 group`}><X className="text-red-500 group-hover:scale-110 transition" size={32}/><span className={`font-bold ${theme.textMain}`}>{t.no}</span></button></div><button onClick={() => setAuthView('login')} className={`text-sm ${theme.textSub} hover:${theme.textMain}`}>{t.backHome}</button></div>)}
                  {authView === 'register_has_license' && (<form onSubmit={handleRegisterHasLicense} className="space-y-4 animate-fadeIn max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar"><h2 className={`text-xl font-bold ${theme.textMain} text-center sticky top-0 ${theme.bgCard} py-2 z-10`}>{t.register}</h2><div className="flex justify-center mb-4"><div className={`w-24 h-24 rounded-full border-2 border-dashed ${theme.goldBorder} flex items-center justify-center cursor-pointer hover:bg-gray-800/50 transition`}><Camera className={theme.textSub} /></div></div><input type="text" placeholder={t.fullName} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, name: e.target.value})}/><input type="text" placeholder={t.licenseNumber} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, license: e.target.value})}/><input type="email" placeholder={t.email} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, email: e.target.value})}/><input type="tel" placeholder={t.phone} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, phone: e.target.value})}/><input type="text" placeholder={t.nidLabel} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, nid: e.target.value})}/><input type="text" placeholder={t.address} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, address: e.target.value})}/><input type="text" placeholder={t.trafficUnit} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, unit: e.target.value})}/><button type="submit" className={`w-full ${theme.goldBg} text-black font-bold py-3 rounded-lg mt-4`}>{t.register}</button><button type="button" onClick={() => setAuthView('login')} className={`w-full text-center text-sm ${theme.textSub} mt-2`}>{t.haveAccount}</button></form>)}
                  {authView === 'register_no_license' && (<form onSubmit={handleRegisterNoLicenseSubmit} className="space-y-4 animate-fadeIn max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar"><h2 className={`text-xl font-bold ${theme.textMain} text-center sticky top-0 ${theme.bgCard} py-2 z-10`}>{t.requestLicense}</h2><input type="text" placeholder={t.fullName} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, name: e.target.value})}/><input type="email" placeholder={t.email} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, email: e.target.value})}/><input type="text" placeholder={t.nidLabel} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, nid: e.target.value})}/><input type="text" placeholder={t.address} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, address: e.target.value})}/><input type="text" placeholder={t.trafficUnit} className={`w-full ${theme.input} p-3 rounded-lg`} required onChange={(e) => setAuthInputs({...authInputs, unit: e.target.value})}/><button type="submit" className={`w-full ${theme.goldBg} text-black font-bold py-3 rounded-lg mt-4`}>{t.createAccount}</button><button type="button" onClick={() => setAuthView('login')} className={`w-full text-center text-sm ${theme.textSub} mt-2`}>{t.haveAccount}</button></form>)}
              </div>
          </div>
      );
  }

  // --- DASHBOARD RENDER ---
  if (showCompletion) return <><style>{customStyles}</style><CompletionModal onClose={() => { setShowCompletion(false); setCurrentView('dashboard'); }} t={t} theme={theme}/></>;
  if (currentView === 'course_details' && selectedCourse) return (<><style>{customStyles}</style><CourseIntroPage course={selectedCourse} onStart={() => setCurrentView('learning')} onBack={() => { setCurrentView('dashboard'); }} t={t} lang={lang} theme={lightTheme} isDark={false} /></>);
  if (currentView === 'learning' && selectedCourse) return (<><style>{customStyles}</style><LearningInterface course={selectedCourse} onBack={() => setCurrentView('course_details')} onComplete={handleFinishTrack} t={t} lang={lang} theme={lightTheme} isDark={false} /></>);

  const renderPaymentContent = () => { 
    if (!payingItem) return null;
    if (paymentStep === 'input_details' && payingItem.type === 'violation_fine') {
      return (<div className="space-y-4 animate-slideUp"><h3 className={`text-xl font-bold ${theme.textMain} mb-4`}>{t.feesDetails}</h3><div className={`${theme.bgCard} p-6 rounded-xl border ${theme.border} space-y-4`}><input type="text" defaultValue={userData.name} readOnly className={`w-full ${theme.input} rounded-lg p-3 cursor-not-allowed`} /><div className="grid grid-cols-2 gap-4"><input type="text" defaultValue={userData.licensePlate} readOnly className={`w-full ${theme.input} rounded-lg p-3 text-center cursor-not-allowed`} /><input type="text" defaultValue={userData.licenseNumber} readOnly className={`w-full ${theme.input} rounded-lg p-3 text-center cursor-not-allowed`} /></div><input type="text" defaultValue={userData.address} className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`} /><button onClick={() => setPaymentStep('summary')} className={`w-full ${theme.goldBg} text-black font-bold py-3 rounded-lg hover:bg-yellow-500 mt-4`}>{t.payNow}</button></div></div>);
    }
    if (paymentStep === 'summary') {
      const price = payingItem.price || payingItem.amount;
      return (<div className="space-y-6 animate-zoomIn"><div className={`${theme.bgCard} p-4 rounded-xl border ${theme.border} flex justify-between items-center`}><div><h3 className={`font-bold ${theme.textMain} text-lg`}>{payingItem.title}</h3></div><div className="text-left"><p className={`${theme.goldText} font-bold text-xl`}>{price} {t.sar}</p></div></div><div className="space-y-2"><h4 className={`${theme.textSub} font-bold mb-3`}>{t.feesDetails}:</h4><div className={`flex justify-between ${theme.textSub} text-sm border-b ${theme.border} pb-2`}><span>{t.basePrice}</span><span>{price} {t.sar}</span></div><div className={`flex justify-between ${theme.textSub} text-sm border-b ${theme.border} pb-2`}><span>{t.adminFees} (5%)</span><span>{(price * 0.05).toFixed(2)} {t.sar}</span></div><div className={`flex justify-between ${theme.textMain} font-bold text-lg pt-2`}><span>{t.totalDue}</span><span className={`${theme.goldText}`}>{(price * 1.05).toFixed(2)} {t.sar}</span></div></div><div><h4 className={`${theme.textMain} font-bold mb-4`}>{t.choosePayment}:</h4><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><button onClick={() => {setPaymentMethod('visa'); setPaymentStep('details');}} className={`p-4 rounded-xl border ${theme.border} ${theme.bgSub} hover:border-[#D4AF37] ${theme.hover} transition flex flex-col items-center gap-2`}><CreditCard className="text-[#D4AF37]" size={32}/><span className={`font-bold text-sm ${theme.textMain}`}>{t.visa}</span></button><button onClick={() => {setPaymentMethod('vf_cash'); setPaymentStep('details');}} className={`p-4 rounded-xl border ${theme.border} ${theme.bgSub} hover:border-[#D4AF37] ${theme.hover} transition flex flex-col items-center gap-2`}><Smartphone className="text-red-500" size={32}/><span className={`font-bold text-sm ${theme.textMain}`}>{t.wallet}</span></button><button onClick={() => {setPaymentMethod('fawry'); setPaymentStep('details');}} className={`p-4 rounded-xl border ${theme.border} ${theme.bgSub} hover:border-[#D4AF37] ${theme.hover} transition flex flex-col items-center gap-2`}><Receipt className="text-yellow-400" size={32}/><span className={`font-bold text-sm ${theme.textMain}`}>{t.fawry}</span></button></div></div></div>);
    }
    if (paymentStep === 'details') {
       return (
         <div className="animate-slideUp"><button onClick={() => setPaymentStep('summary')} className={`flex items-center gap-2 ${theme.textSub} mb-6 hover:${theme.textMain}`}><ArrowLeft size={16} className={lang==='en'?'rotate-180':''}/> {t.backHome}</button>
           {paymentMethod === 'visa' && (<div className={`${theme.bgCard} p-6 rounded-xl border ${theme.border} space-y-4`}><h3 className={`text-xl font-bold ${theme.textMain} flex items-center gap-2`}><CreditCard className="text-[#D4AF37]"/> {t.visa}</h3><input type="text" placeholder={t.cardNumber} className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`}/><div className="grid grid-cols-2 gap-4"><input type="text" placeholder="MM/YY" className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`}/><input type="text" placeholder="CVV" className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`}/></div><input type="text" placeholder={t.cardName} className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`}/><button onClick={processPayment} className={`w-full ${theme.goldBg} text-black font-bold py-3 rounded-lg hover:bg-yellow-500 mt-4`}>{t.payNow}</button></div>)}
           {paymentMethod === 'vf_cash' && (<div className={`${theme.bgCard} p-6 rounded-xl border ${theme.border} space-y-4 text-center`}><h3 className={`text-xl font-bold ${theme.textMain} flex items-center justify-center gap-2`}><Smartphone className="text-red-500"/> {t.wallet}</h3><input type="text" placeholder={t.walletNumber} className={`w-full ${theme.input} rounded-lg p-3 focus:border-red-500 outline-none text-center font-mono text-lg`}/><button onClick={() => setPaymentStep('otp')} className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 mt-4">{t.sendCode}</button></div>)}
           {paymentMethod === 'fawry' && (<div className={`${theme.bgCard} p-6 rounded-xl border ${theme.border} space-y-6 text-center`}><h3 className={`text-xl font-bold ${theme.textMain} flex items-center justify-center gap-2`}><Receipt className="text-yellow-400"/> {t.fawryCode}</h3><div className="bg-white text-black p-4 rounded-lg font-mono text-3xl font-bold tracking-widest border-2 border-dashed border-gray-400">988 231 445</div><button onClick={processPayment} className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 mt-4">{t.payNow}</button></div>)}
         </div>
       );
    }
    if (paymentStep === 'otp') { return (<div className={`${theme.bgCard} p-6 rounded-xl border ${theme.border} space-y-4 text-center animate-zoomIn`}><h3 className={`text-xl font-bold ${theme.textMain}`}>{t.confirmPay}</h3><div className="flex gap-2 justify-center my-4">{[1,2,3,4,5,6].map(i => <div key={i} className={`w-10 h-12 ${theme.bgSub} border ${theme.border} rounded flex items-center justify-center ${theme.textMain} font-bold`}>*</div>)}</div><input type="text" placeholder={t.enterOTP} className={`w-full ${theme.input} rounded-lg p-3 focus:border-red-500 outline-none text-center`}/><button onClick={processPayment} className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 mt-4">{t.confirmPay}</button></div>); }
    if (paymentStep === 'processing') return <div className="flex flex-col items-center justify-center py-20 animate-fadeIn"><Loader className="text-[#D4AF37] w-16 h-16 animate-spin mb-4"/><h3 className={`text-xl font-bold ${theme.textMain}`}>{t.paymentProcessing}</h3></div>;
    if (paymentStep === 'success') {
       return (
          <div className="flex flex-col items-center justify-center py-10 animate-zoomIn text-center"><div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_green]"><Check className="text-white w-10 h-10"/></div><h3 className={`text-2xl font-bold ${theme.textMain} mb-2`}>{t.paymentSuccess}</h3>
             {payingItem.type === 'new_license' && requestId && (<div className={`${theme.bgSub} p-6 rounded-lg border-2 border-dashed ${theme.goldBorder} mb-6 w-full max-w-sm`}><p className={`text-xs ${theme.textSub} mb-1 uppercase`}>{t.requestId}</p><p className={`text-4xl font-mono font-bold ${theme.goldText} tracking-widest mb-4`}>{requestId}</p><div className="flex items-center gap-2 justify-center bg-blue-900/30 p-2 rounded text-blue-300 text-sm mb-4"><FileCheck size={16}/> <span>{t.assignedTraining}</span></div><button onClick={() => startLicenseTraining(payingItem.licenseType)} className={`w-full ${theme.goldBg} text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition shadow-lg transform hover:scale-105 flex items-center justify-center gap-2`}><Play size={18}/> {t.startLicenseTraining}</button></div>)}
             {payingItem.type === 'violation_fine' && (<div className="animate-slideUp"><p className={`${theme.textSub} mb-4`}>تم سداد الغرامة بنجاح.</p><button onClick={() => { setActiveModal(null); setPaymentStep('summary'); }} className={`bg-blue-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-blue-700 transition shadow-lg transform hover:scale-105 flex items-center gap-2 mx-auto`}>{t.close}</button></div>)}
             {payingItem.type === 'violation_training' && (<div className="animate-slideUp"><p className={`${theme.textSub} mb-4`}>تم سداد التدريب بنجاح.</p><button onClick={() => startViolationTraining(payingItem)} className={`bg-[#D4AF37] text-black font-bold py-3 px-12 rounded-lg hover:bg-yellow-500 transition shadow-lg transform hover:scale-105`}>{t.startTraining}</button></div>)}
             {payingItem.type === 'course' && <button onClick={() => { setSelectedCourse(payingItem); setActiveModal(null); setCurrentView('course_details'); }} className={`bg-[#D4AF37] text-black font-bold py-3 px-12 rounded-lg hover:bg-yellow-500 transition shadow-lg transform hover:scale-105`}>{t.continueTrack}</button>}
             {payingItem.type === 'track_unlock' && (<div className="animate-slideUp"><p className={`${theme.textSub} mb-4`}>تم فتح المسار بنجاح.</p><button onClick={() => { setPaymentStep('summary'); setActiveModal(null); }} className={`bg-[#D4AF37] text-black font-bold py-3 px-12 rounded-lg hover:bg-yellow-500 transition`}>{t.close}</button></div>)}
             {payingItem.type === 'license_fee' && <button onClick={() => { setActiveModal(null); setPayingItem(null); setRequestId(null); }} className={`bg-[#D4AF37] text-black font-bold py-3 px-12 rounded-lg hover:bg-yellow-500 transition shadow-lg transform hover:scale-105`}>{t.close}</button>}
          </div>
       );
    }
  };

  const renderModalContent = () => {
    switch(activeModal) {
      case 'payment_modal': return <div className="min-h-[400px]">{renderPaymentContent()}</div>;
      
      // --- MODIFIED: Training Modal (New Logic) ---
      case 'training':
        if (!trainingCategory) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px] animate-fadeIn">
                    <button onClick={() => setTrainingCategory('driving')} className={`relative group overflow-hidden rounded-2xl border-2 ${theme.goldBorder} flex flex-col items-center justify-center p-8 transition hover:scale-[1.02]`}>
                        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/car-driving-concept_53876-1234.jpg')] bg-cover opacity-20 group-hover:opacity-40 transition duration-700"></div>
                        <Car size={64} className={`${theme.goldText} mb-4 relative z-10`}/>
                        <h3 className={`text-3xl font-bold ${theme.textMain} relative z-10`}>{t.drivingLicenseTracks}</h3>
                    </button>
                    <button onClick={() => setTrainingCategory('vehicle')} className={`relative group overflow-hidden rounded-2xl border-2 ${theme.border} hover:border-[#D4AF37] flex flex-col items-center justify-center p-8 transition hover:scale-[1.02]`}>
                         <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/electric-car-concept_114360-123.jpg')] bg-cover opacity-20 group-hover:opacity-40 transition duration-700"></div>
                        <Shield size={64} className={`text-blue-400 mb-4 relative z-10`}/>
                        <h3 className={`text-3xl font-bold ${theme.textMain} relative z-10`}>{t.vehicleLicenseTracks}</h3>
                    </button>
                </div>
            );
        } else if (!selectedTrack) {
            return (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-slideUp">
                    {tracksStructure[trainingCategory].map(track => {
                        const trackKey = `${trainingCategory}_${track.id}`;
                        const isUnlocked = userTracks[trackKey]?.unlocked;
                        return (
                            <button key={track.id} onClick={() => setSelectedTrack(track)} className={`${theme.bgCard} border ${theme.border} p-6 rounded-xl flex flex-col items-center gap-4 hover:border-[#D4AF37] transition group relative overflow-hidden transform hover:scale-105 duration-200`}>
                                <div className={`p-4 rounded-full ${theme.bgSub} group-hover:bg-[#D4AF37] transition duration-300`}>
                                    <div className={`text-[#D4AF37] group-hover:text-black`}>{track.icon}</div>
                                </div>
                                <span className={`font-bold ${theme.textMain} text-center`}>{t[track.label_key]}</span>
                                {isUnlocked && <div className="absolute top-2 left-2 text-green-500"><CheckCircle size={16}/></div>}
                            </button>
                        );
                    })}
                </div>
            );
        } else {
            const trackKey = `${trainingCategory}_${selectedTrack.id}`;
            const userTrackData = userTracks[trackKey] || { unlocked: false, coursesProgress: {1:0, 2:0, 3:0} };
            return (
                <div className="space-y-6 animate-slideUp">
                    <div className={`${theme.bgSub} p-6 rounded-xl border ${theme.goldBorder} flex justify-between items-center`}>
                        <div><h3 className={`text-2xl font-bold ${theme.textMain}`}>{t[selectedTrack.label_key]}</h3><p className={`${theme.textSub}`}>3 {t.trainings} - {t.startTrack}</p></div>
                        {!userTrackData.unlocked ? (<button onClick={() => handleTrackPurchase(selectedTrack, trainingCategory)} className={`${theme.goldBg} text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition shadow-[0_0_15px_#D4AF37] transform hover:scale-105`}>{t.unlock_fee}: {selectedTrack.price} {t.sar}</button>) : (<span className="text-green-500 font-bold flex items-center gap-2"><CheckCircle /> {t.paid}</span>)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map(level => {
                            const courseInfo = trackCoursesData.courses[level-1];
                            const isLocked = !userTrackData.unlocked || (level > 1 && userTrackData.coursesProgress[level-1] < 100);
                            const progress = userTrackData.coursesProgress?.[level] || 0;
                            const title = lang === 'ar' ? courseInfo.title_ar : courseInfo.title_en;
                            return (
                                <div key={level} className={`${theme.bgCard} border ${isLocked ? theme.border : theme.goldBorder} p-4 rounded-xl relative ${isLocked ? 'opacity-50' : 'hover:shadow-lg transition transform hover:-translate-y-1'}`}>
                                    {isLocked && <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center rounded-xl"><Lock className="text-gray-400" size={32}/></div>}
                                    <div className="mb-4 aspect-video bg-gray-800 rounded-lg overflow-hidden"><img src={`https://source.unsplash.com/random/400x200?car,traffic,${level}`} alt="img" className="w-full h-full object-cover"/></div>
                                    <h4 className={`font-bold ${theme.textMain} mb-2 text-sm h-10 line-clamp-2`}>{title}</h4>
                                    <ProgressBar percentage={progress} isDark={isDarkMode} />
                                    <div className="flex justify-between items-center mt-3 text-xs text-gray-400"><span>{courseInfo.lessons} Lessons</span><span>{progress}%</span></div>
                                    <button onClick={() => !isLocked && startTrackCourse(selectedTrack.id, trainingCategory, level)} disabled={isLocked} className={`w-full mt-4 py-2 rounded font-bold text-sm ${isLocked ? 'bg-gray-700 text-gray-500' : `${theme.goldBg} text-black hover:bg-yellow-500`}`}>{progress > 0 ? t.continueCourse : t.startCourse}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
        }
      
      // --- MODIFIED: Violations Modal (New Logic) ---
      case 'violations':
        if (!violationCategory) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[300px] animate-fadeIn">
                    <button onClick={() => setViolationCategory('driving')} className={`group rounded-2xl border-2 ${theme.goldBorder} flex flex-col items-center justify-center p-6 transition hover:bg-[#D4AF37]/10 transform hover:scale-[1.02]`}>
                        <FileText size={48} className={`${theme.goldText} mb-2`}/>
                        <h3 className={`text-xl font-bold ${theme.textMain}`}>{t.drivingViolations}</h3>
                    </button>
                    <button onClick={() => setViolationCategory('vehicle')} className={`group rounded-2xl border-2 ${theme.border} hover:border-[#D4AF37] flex flex-col items-center justify-center p-6 transition hover:bg-[#D4AF37]/10 transform hover:scale-[1.02]`}>
                        <Car size={48} className={`text-blue-400 mb-2`}/>
                        <h3 className={`text-xl font-bold ${theme.textMain}`}>{t.vehicleViolations}</h3>
                    </button>
                </div>
            );
        } else {
            const filteredViolations = violations.filter(v => v.type === violationCategory);
            return (
                <div className="animate-slideUp">
                    <table className="w-full border-collapse text-sm">
                        <thead><tr className={`${theme.bgHeader} ${theme.goldText} text-start`}><th className={`p-3 border-b ${theme.border}`}>{t.violationType}</th><th className={`p-3 border-b ${theme.border}`}>{t.amount}</th><th className={`p-3 border-b ${theme.border}`}>{t.status}</th><th className={`p-3 border-b ${theme.border}`}>{t.action}</th></tr></thead>
                        <tbody>
                            {filteredViolations.map(v => (
                                <tr key={v.id} className={`${theme.hover} transition-colors`}>
                                    <td className={`p-3 border-b ${theme.border} ${theme.textMain}`}>{lang==='ar' ? v.name_ar : v.name_en}</td>
                                    <td className={`p-3 border-b ${theme.border} font-bold text-red-400`}>{v.amount} {t.sar}</td>
                                    <td className={`p-3 border-b ${theme.border}`}><span className={`px-2 py-1 rounded text-xs ${v.status === 'paid' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>{t[v.status]}</span></td>
                                    <td className={`p-3 border-b ${theme.border} flex gap-2 items-center`}>
                                        {v.status === 'unpaid' && (
                                            <>
                                                {/* Training Button - Always available until completed */}
                                                <button 
                                                    onClick={() => v.trainingStatus === 'ready_to_start' ? startViolationTraining(v) : handlePayViolationTraining(v)} 
                                                    disabled={v.trainingStatus === 'completed'} 
                                                    className={`px-3 py-1 rounded font-bold text-xs flex items-center gap-1 transition ${v.trainingStatus === 'completed' ? 'bg-green-800 text-gray-400 cursor-not-allowed opacity-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                                >
                                                    {v.trainingStatus === 'completed' ? <Check size={12}/> : <ShieldAlert size={12}/>}
                                                    {v.trainingStatus === 'completed' ? t.training_completed : v.trainingStatus === 'ready_to_start' ? t.startTraining : t.payTraining}
                                                </button>
                                                {/* Fine Payment Button - Disabled until training complete */}
                                                <div className="group relative">
                                                  <button 
                                                      onClick={() => handleFinePayFromTable(v)} 
                                                      disabled={v.trainingStatus !== 'completed' && v.trainingStatus !== 'none' /* Actually logic is: Must be completed */} 
                                                      className={`px-3 py-1 rounded font-bold text-xs flex items-center gap-1 transition ${v.trainingStatus !== 'completed' ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : `${theme.goldBg} text-black hover:bg-yellow-500`}`} 
                                                  >
                                                      <DollarSign size={12}/> {t.payNow}
                                                  </button>
                                                  {v.trainingStatus !== 'completed' && (
                                                    <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
                                                      {t.pay_course_first}
                                                    </span>
                                                  )}
                                                </div>
                                            </>
                                        )}
                                        {v.status === 'paid' && <span className="text-green-500 flex items-center gap-1"><CheckCircle size={14}/> {t.paid}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

      case 'course_market': const filteredCourses = marketCourses.filter(c => c.level === selectedLevel); return (<div className="space-y-6"><div className={`flex justify-between items-center ${theme.bgCard} p-4 rounded-lg border ${theme.border}`}><h3 className={`text-xl font-bold ${theme.textMain}`}>{t.trainingTracks}: <span className={`${theme.goldText}`}>{t[selectedLevel]}</span></h3></div>{filteredCourses.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredCourses.map((course) => (<div key={course.id} className={`${theme.bgCard} rounded-xl overflow-hidden border ${theme.border} hover:border-[#D4AF37] transition-all duration-300 group flex flex-col hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-slideUp`}><div className="h-48 relative overflow-hidden"><img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" /><div className="absolute top-2 right-2 bg-black/80 text-[#D4AF37] text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">{t[course.level]}</div></div><div className="p-4 flex-1 flex flex-col"><h4 className={`font-bold text-lg mb-2 ${theme.textMain} line-clamp-2 h-14 group-hover:text-[#D4AF37] transition-colors`}>{course.title}</h4><div className={`mt-auto border-t ${theme.border} pt-4 flex items-center justify-between`}><span className={`text-xl font-bold ${theme.goldText}`}>{course.price} {t.sar}</span><button onClick={() => handleCourseClick(course)} className={`${theme.goldBg} text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-400 transform hover:scale-105 transition`}>{t.subscribe}</button></div></div></div>))}</div>) : (<div className={`text-center py-20 ${theme.textSub} border-2 border-dashed border-gray-700 rounded-xl animate-pulse`}><AlertCircle size={48} className="mx-auto mb-4 opacity-50"/><p>No Data</p></div>)}</div>);
      case 'account': return (<div className="animate-slideUp space-y-6"><div className={`flex flex-col items-center justify-center text-center border-b ${theme.border} pb-6`}><div className="relative mb-4 group"><img src={userData.img} alt="user" className={`w-28 h-28 rounded-full border-4 ${theme.goldBorder} shadow-[0_0_20px_rgba(212,175,55,0.4)] transition transform group-hover:scale-105`} /><div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white" title={t.activeUser}></div></div><h3 className={`text-2xl font-bold ${theme.textMain}`}>{userData.name}</h3><p className={`${theme.textSub} flex items-center gap-1 mt-1`}><Globe size={14}/> Egypt</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div className={`${theme.bgCard} p-4 rounded-lg border ${theme.border} flex items-center gap-4`}><div className={`${theme.bgSub} p-3 rounded-full`}><User className={`${theme.goldText}`} size={20}/></div><div><p className={`text-xs ${theme.textSub}`}>{t.nidLabel}</p><p className={`font-bold ${theme.textMain} font-mono`}>{userData.nid}</p></div></div><div className={`${theme.bgCard} p-4 rounded-lg border ${theme.border} flex items-center gap-4`}><div className={`${theme.bgSub} p-3 rounded-full`}><FileText className={`${theme.goldText}`} size={20}/></div><div><p className={`text-xs ${theme.textSub}`}>{t.licenseNumber}</p><p className={`font-bold ${theme.textMain} font-mono`}>{userData.licenseNumber}</p></div></div><div className={`${theme.bgCard} p-4 rounded-lg border ${theme.border} flex items-center gap-4`}><div className={`${theme.bgSub} p-3 rounded-full`}><MapPin className={`${theme.goldText}`} size={20}/></div><div><p className={`text-xs ${theme.textSub}`}>{t.governorate}</p><p className={`font-bold ${theme.textMain}`}>{userData.governorate}</p></div></div><div className={`${theme.bgCard} p-4 rounded-lg border ${theme.border} flex items-center gap-4`}><div className={`${theme.bgSub} p-3 rounded-full`}><Building2 className={`${theme.goldText}`} size={20}/></div><div><p className={`text-xs ${theme.textSub}`}>{t.trafficUnit}</p><p className={`font-bold ${theme.textMain}`}>{userData.unit}</p></div></div><div className={`${theme.bgCard} p-4 rounded-lg border ${theme.border} flex items-center gap-4 md:col-span-2`}><div className={`${theme.bgSub} p-3 rounded-full`}><MapPin className={`${theme.goldText}`} size={20}/></div><div><p className={`text-xs ${theme.textSub}`}>{t.address}</p><p className={`font-bold ${theme.textMain}`}>{userData.address}</p></div></div><div className={`${theme.bgCard} p-4 rounded-lg border ${theme.border} flex items-center gap-4`}><div className={`${theme.bgSub} p-3 rounded-full`}><Phone className={`${theme.goldText}`} size={20}/></div><div><p className={`text-xs ${theme.textSub}`}>{t.phone}</p><p className={`font-bold ${theme.textMain}`}>{userData.phone}</p></div></div><div className={`${theme.bgCard} p-4 rounded-lg border ${theme.border} flex items-center gap-4`}><div className={`${theme.bgSub} p-3 rounded-full`}><Mail className={`${theme.goldText}`} size={20}/></div><div><p className={`text-xs ${theme.textSub}`}>{t.email}</p><p className={`font-bold ${theme.textMain}`}>{userData.email}</p></div></div></div></div>);
      case 'license': if(showLicenseForm) { return (<div className="animate-zoomIn"><div className={`flex items-center justify-between mb-6 border-b ${theme.border} pb-4`}><h3 className={`text-xl font-bold ${theme.goldText}`}>{t.requestLicense}</h3><button onClick={() => setShowLicenseForm(false)} className={`flex items-center gap-2 ${theme.textSub} hover:${theme.textMain} transition`}><ArrowLeft size={16}/> {t.close}</button></div><div className={`${theme.bgCard} p-6 rounded-xl border ${theme.border}`}><form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => {e.preventDefault(); if(!licenseFormData.nid || !licenseFormData.governorate || !licenseFormData.licenseType) return alert(lang === 'ar' ? 'يرجى ملء كافة البيانات' : 'Please fill all fields'); handleLicenseFormSubmit(); }}><div className="md:col-span-2 space-y-2"><label className={`text-sm ${theme.textSub}`}>{t.fullName}</label><input type="text" value={userData.name} readOnly className={`w-full ${theme.bgSub} border ${theme.border} ${theme.textMain} rounded-lg p-3 cursor-not-allowed opacity-70`} /></div><div className="md:col-span-2 space-y-2"><label className={`text-sm ${theme.textSub}`}>{t.licenseType}</label><select className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none font-bold`} onChange={(e) => setLicenseFormData({...licenseFormData, licenseType: e.target.value})} value={licenseFormData.licenseType}><option value="">{t.selectLicenseType}</option><option value="private">{t.lic_private}</option><option value="first_class">{t.lic_first}</option><option value="second_class">{t.lic_second}</option><option value="third_class">{t.lic_third}</option><option value="motorcycle">{t.lic_moto}</option></select></div><div className="md:col-span-2 space-y-2"><label className={`text-sm ${theme.textSub}`}>{t.nidLabel}</label><input type="text" maxLength={14} value={licenseFormData.nid} onChange={(e) => setLicenseFormData({...licenseFormData, nid: e.target.value})} className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none tracking-widest`} placeholder="2900..." /></div><div className="space-y-2"><label className={`text-sm ${theme.textSub}`}>{t.governorate}</label><select className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`} onChange={(e) => setLicenseFormData({...licenseFormData, governorate: e.target.value})}><option value="">{t.selectGov}</option><option value="Cairo">القاهرة</option><option value="Giza">الجيزة</option><option value="Alex">الإسكندرية</option></select></div><div className="space-y-2"><label className={`text-sm ${theme.textSub}`}>{t.trafficUnit}</label><select className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`} onChange={(e) => setLicenseFormData({...licenseFormData, unit: e.target.value})}><option value="">{t.selectUnit}</option><option value="nasr_city">وحدة مدينة نصر</option><option value="el_tahra">وحدة الطاهرة</option><option value="maadi">وحدة المعادي</option><option value="october">وحدة 6 أكتوبر</option></select></div><div className="md:col-span-2 border-t border-dashed border-gray-500 pt-4 mt-2"><h4 className={`text-sm font-bold ${theme.goldText} mb-4`}>{t.addressDetails}</h4></div><div className="space-y-2"><label className={`text-sm ${theme.textSub}`}>{t.area}</label><input type="text" className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`} onChange={(e) => setLicenseFormData({...licenseFormData, area: e.target.value})} /></div><div className="space-y-2"><label className={`text-sm ${theme.textSub}`}>{t.street}</label><input type="text" className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`} onChange={(e) => setLicenseFormData({...licenseFormData, street: e.target.value})} /></div><div className="space-y-2"><label className={`text-sm ${theme.textSub}`}>{t.building}</label><input type="text" className={`w-full ${theme.input} rounded-lg p-3 focus:border-[#D4AF37] outline-none`} onChange={(e) => setLicenseFormData({...licenseFormData, building: e.target.value})} /></div><div className="md:col-span-2 mt-6 flex gap-4"><button type="submit" className={`flex-1 ${theme.goldBg} hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg`}><Save size={18}/> {t.nextStep}</button></div></form></div></div>); } return (<div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slideUp"><div className={`bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl border ${theme.goldBorder} relative overflow-hidden transform hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]`}><div className={`absolute top-0 right-0 ${theme.goldBg} text-black text-xs font-bold px-3 py-1 rounded-bl-lg`}>{t.active}</div><h3 className="text-xl font-bold mb-4 text-white">{t.licensePrivate}</h3><p className="text-gray-400 text-sm mb-1">{userData.name}</p><p className="text-[#D4AF37] font-mono text-lg tracking-widest">{userData.nid}</p></div><div onClick={() => setShowLicenseForm(true)} className={`${theme.bgCard} p-6 rounded-xl border border-dashed border-gray-500 flex flex-col items-center justify-center cursor-pointer ${theme.hover} hover:border-[#D4AF37] transition duration-300 group`}><FileText size={40} className={`text-gray-400 mb-2 group-hover:${theme.goldText} transition`}/><p className={`group-hover:${theme.goldText} transition ${theme.textSub}`}>{t.requestLicense}</p></div></div>);
      case 'violation_info': if (!selectedViolationInfo) return null; return (<div className="animate-zoomIn flex flex-col md:flex-row gap-6 items-center"><div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]"><img src={selectedViolationInfo.img} alt="violation" className="w-full h-64 object-cover hover:scale-110 transition duration-700"/></div><div className="flex-1 space-y-4"><h3 className={`text-2xl font-bold ${theme.goldText}`}>{lang === 'ar' ? selectedViolationInfo.title_ar : selectedViolationInfo.title_en}</h3><p className={`${theme.textMain} leading-relaxed`}>{lang === 'ar' ? selectedViolationInfo.desc_ar : selectedViolationInfo.desc_ar}</p><div className={`${theme.bgSub} p-4 rounded-lg border-l-4 border-[#D4AF37]`}><p className={`font-bold ${theme.textMain} mb-1`}>{t.penalty}:</p><p className="text-red-400 text-sm font-bold">{selectedViolationInfo.penalty_ar}</p></div><div className={`${theme.bgSub} p-4 rounded-lg border-l-4 border-red-500`}><p className={`font-bold ${theme.textMain} mb-1`}>{t.pointsDeduction}:</p><p className="text-red-400 text-sm font-bold">{selectedViolationInfo.points} {t.points}</p></div><button onClick={() => setActiveModal(null)} className={`w-full ${theme.goldBg} text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition shadow-lg mt-4`}>{t.close}</button></div></div>);
      // --- MODIFIED: History Modal (Dynamic) ---
      case 'history': return (
        <div className="space-y-4 animate-slideUp">
          {paymentHistory.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <History size={48} className="mx-auto mb-2 opacity-50"/>
              <p>{t.no} {t.paymentHistory}</p>
            </div>
          ) : (
            paymentHistory.map((item, index) => (
              <div key={index} className={`flex items-center justify-between ${theme.bgCard} p-4 rounded-lg border-r-4 ${item.type === 'violation_fine' ? 'border-red-500' : 'border-green-500'} ${theme.hover} transition duration-300`}>
                <div>
                  <h4 className={`font-bold ${theme.textMain}`}>{item.title}</h4>
                  <p className={`text-xs ${theme.textSub}`}>{item.date}</p>
                  <span className="text-xs text-gray-400">
                    {item.type === 'violation_fine' ? t.type_fine : 
                     item.type === 'violation_training' ? t.type_training : 
                     item.type === 'track_unlock' ? t.type_track : t.type_license}
                  </span>
                </div>
                <div className="text-left">
                  <p className={`font-bold ${theme.goldText}`}>{item.amount} {t.sar}</p>
                </div>
              </div>
            ))
          )}
        </div>
      );
      case 'certs': return <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-slideUp"><div className={`bg-white text-black p-4 rounded border-4 ${theme.goldBorder} flex flex-col items-center text-center hover:scale-105 transition duration-300 cursor-pointer shadow-lg`}><Award size={40} className="text-[#D4AF37] mb-2 animate-bounce"/><h4 className="font-bold text-sm">Certificate</h4><button className={`mt-3 ${theme.bgSub} ${theme.textMain} text-xs px-3 py-1 rounded hover:bg-gray-800 transition`}>{t.downloadCert}</button></div></div>;
      default: return null;
    }
  };

  // --- 6. RENDER DASHBOARD (EXACT OLD LAYOUT) ---
  return (
    <div className={`min-h-screen ${theme.bgMain} ${theme.textMain} font-sans animate-fadeIn ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <style>{customStyles}</style>
      <header className={`${theme.bgHeader} border-b ${theme.goldBorder} p-4 shadow-lg sticky top-0 z-30`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* PROFILE DROPDOWN */}
          <div className="relative group" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
             <div className="flex items-center gap-3 min-w-[200px] cursor-pointer">
                <img src={userData.img} alt="Profile" className={`w-12 h-12 rounded-full border ${theme.goldBorder} p-1 transition group-hover:scale-110`}/>
                <div><h1 className={`font-bold text-lg ${theme.textMain} group-hover:${theme.goldText} transition`}>{userData.name}</h1><span className={`text-xs ${theme.goldText}`}>{t.activeUser}</span></div>
             </div>
             {isProfileMenuOpen && (
                 <div className={`absolute top-full ${lang === 'ar' ? 'right-0' : 'left-0'} mt-2 w-48 ${theme.bgHeader} border ${theme.goldBorder} rounded-lg shadow-xl z-50 animate-zoomIn`}>
                     <div onClick={() => { setIsProfileMenuOpen(false); setActiveModal('account'); }} className={`px-4 py-3 ${theme.hover} cursor-pointer border-b ${theme.border} transition-colors hover:text-[#D4AF37] ${theme.textMain} flex items-center gap-2`}><User size={16}/> {t.profile}</div>
                     <div onClick={handleLogout} className={`px-4 py-3 ${theme.hover} cursor-pointer transition-colors hover:text-red-500 text-red-400 flex items-center gap-2`}><LogOut size={16}/> {t.logout}</div>
                 </div>
             )}
          </div>
          
          <div className="flex items-center gap-3 order-3 md:order-2 w-full md:w-auto justify-center">
             <div className="relative" onMouseEnter={handleTrainingMouseEnter} onMouseLeave={handleTrainingMouseLeave}>
               {/* RESETTING STATE ON CLICK TO ENSURE FRESH NAVIGATION */}
               <button onClick={() => { setTrainingCategory(null); setSelectedTrack(null); setActiveModal('training'); }} className={`flex items-center gap-2 ${theme.bgCard} px-4 py-2 rounded-lg border ${theme.border} hover:border-[#D4AF37] transition duration-300 hover:shadow-[0_0_10px_#D4AF37] ${theme.textMain}`}><Play size={16}/> {t.trainings}</button>
               {isTrainingMenuOpen && (<div className={`absolute top-full ${lang === 'ar' ? 'right-0' : 'left-0'} mt-2 w-48 ${theme.bgHeader} border ${theme.goldBorder} rounded-lg shadow-xl z-50 animate-zoomIn`}>{['beginner', 'intermediate', 'advanced'].map(level => (<div key={level} onClick={() => handleLevelSelection(level)} className={`px-4 py-3 ${theme.hover} cursor-pointer border-b ${theme.border} last:border-0 transition-colors hover:text-[#D4AF37] ${theme.textMain}`}>{t[level]}</div>))}</div>)}
             </div>

             <div className="relative" onMouseEnter={handleViolationsMouseEnter} onMouseLeave={handleViolationsMouseLeave}>
                {/* RESETTING STATE ON CLICK TO ENSURE FRESH NAVIGATION */}
                <button onClick={() => { setViolationCategory(null); setActiveModal('violations'); }} className={`flex items-center gap-2 ${theme.bgCard} px-4 py-2 rounded-lg border ${theme.border} hover:border-[#D4AF37] transition duration-300 hover:shadow-[0_0_10px_#D4AF37] ${theme.textMain}`}>
                    <AlertTriangle size={16}/> {t.violations} <ChevronDown size={14}/>
                </button>
                {isViolationsMenuOpen && (
                    <div className={`absolute top-full ${lang === 'ar' ? 'right-0' : 'left-0'} mt-2 w-56 ${theme.bgHeader} border ${theme.goldBorder} rounded-lg shadow-xl z-50 animate-zoomIn`}>
                        <div onClick={() => { setViolationCategory(null); setActiveModal('violations'); }} className={`px-4 py-3 ${theme.hover} cursor-pointer border-b border-gray-500 font-bold ${theme.goldText} transition-colors flex items-center justify-between`}>{t.myViolations} <History size={14}/></div>
                        <div className={`px-4 py-2 text-xs text-gray-400 font-bold uppercase`}>{t.learnViolations}</div>
                        {violationTypesInfo.map(v => (<div key={v.id} onClick={() => handleViolationInfoClick(v)} className={`px-4 py-3 ${theme.hover} cursor-pointer border-b ${theme.border} last:border-0 transition-colors hover:text-[#D4AF37] ${theme.textMain} flex items-center gap-2`}><Info size={14}/> {lang==='ar' ? v.title_ar : v.title_en}</div>))}
                    </div>
                )}
             </div>
             <button onClick={() => setActiveModal('chat')} className={`flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold px-6 py-2 rounded-lg hover:shadow-[0_0_15px_#D4AF37] transition transform hover:scale-105`}><MessageSquare size={18}/> {t.inquiries}</button>
          </div>

          <div className="flex items-center gap-4 order-2 md:order-3">
             <div className="flex flex-col items-center"><span className={`text-xs ${theme.textSub} mb-1`}>{t.points}</span><div className={`flex items-center gap-1 ${theme.bgSub} px-3 py-1 rounded-lg border ${theme.border}`}><Trophy size={14} className="text-yellow-400"/><span className={`${theme.goldText} font-bold text-sm`}>{points}</span></div></div>
             <div className="flex flex-col items-center"><span className={`text-xs ${theme.textSub} mb-1`}>{t.accountStatus}</span><StatusIndicator status={userStatus} /></div>
             <div className={`flex items-center ${theme.bgCard} rounded-lg border ${theme.border} p-1 h-fit`}><button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded hover:bg-gray-500/20 transition ${theme.textMain}`}>{isDarkMode ? <Sun size={18} /> : <Moon size={18} />}</button><div className={`w-px h-6 bg-gray-600 mx-1`}></div><button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className={`px-3 py-1 font-bold text-sm hover:text-[#D4AF37] transition ${theme.textMain}`}>{lang === 'ar' ? 'EN' : 'عربي'}</button></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start min-h-[calc(100vh-100px)]">
        <div className="flex-1 w-full flex flex-col gap-4 mt-10">
           {/* Sidebar Buttons: Logic updated to ensure RTL/LTR anchors correctly */}
           <button onClick={() => setActiveModal('account')} className={`w-full md:w-[60%] ${lang === 'ar' ? 'ml-auto border-r-4 rounded-l-xl' : 'mr-auto border-l-4 rounded-r-xl'} ${theme.bgCard} ${theme.goldBorder} p-4 flex items-center justify-between ${theme.hover} transition-all duration-300 group animate-slideUp`} style={{animationDelay: '0.1s'}}><span className={`font-bold text-lg group-hover:${theme.goldText} transition ${theme.textMain}`}>{t.accountInfo}</span><User size={24} className={`${theme.goldText} group-hover:scale-110 transition`}/></button>
           <button onClick={() => setActiveModal('license')} className={`w-full md:w-[70%] ${lang === 'ar' ? 'ml-auto border-r-4 rounded-l-xl' : 'mr-auto border-l-4 rounded-r-xl'} ${theme.bgCard} ${theme.goldBorder} p-4 flex items-center justify-between ${theme.hover} transition-all duration-300 group animate-slideUp`} style={{animationDelay: '0.2s'}}><span className={`font-bold text-lg group-hover:${theme.goldText} transition ${theme.textMain}`}>{t.licenses}</span><FileText size={24} className={`${theme.goldText} group-hover:scale-110 transition`}/></button>
           {/* TRAINING BUTTON */}
           <button onClick={() => { setTrainingCategory(null); setSelectedTrack(null); setActiveModal('training'); }} className={`w-full md:w-[80%] ${lang === 'ar' ? 'ml-auto border-r-4 rounded-l-xl' : 'mr-auto border-l-4 rounded-r-xl'} ${theme.bgCard} ${theme.goldBorder} p-4 flex items-center justify-between ${theme.hover} transition-all duration-300 group animate-slideUp`} style={{animationDelay: '0.3s'}}><span className={`font-bold text-lg group-hover:${theme.goldText} transition ${theme.textMain}`}>{t.trainingTracks}</span><Play size={24} className={`${theme.goldText} group-hover:scale-110 transition`}/></button>
           {/* VIOLATIONS BUTTON */}
           <button onClick={() => { setViolationCategory(null); setActiveModal('violations'); }} className={`w-full md:w-[90%] ${lang === 'ar' ? 'ml-auto border-r-4 rounded-l-xl' : 'mr-auto border-l-4 rounded-r-xl'} ${theme.bgCard} ${theme.goldBorder} p-4 flex items-center justify-between ${theme.hover} transition-all duration-300 group animate-slideUp`} style={{animationDelay: '0.4s'}}><span className={`font-bold text-lg group-hover:${theme.goldText} transition ${theme.textMain}`}>{t.violationsFines}</span><AlertTriangle size={24} className={`${theme.goldText} group-hover:scale-110 transition`}/></button>
           <button onClick={() => setActiveModal('history')} className={`w-full md:w-[95%] ${lang === 'ar' ? 'ml-auto border-r-4 rounded-l-xl' : 'mr-auto border-l-4 rounded-r-xl'} ${theme.bgCard} ${theme.goldBorder} p-4 flex items-center justify-between ${theme.hover} transition-all duration-300 group animate-slideUp`} style={{animationDelay: '0.5s'}}><span className={`font-bold text-lg group-hover:${theme.goldText} transition ${theme.textMain}`}>{t.paymentHistory}</span><History size={24} className={`${theme.goldText} group-hover:scale-110 transition`}/></button>
           <button onClick={() => setActiveModal('certs')} className={`w-full md:w-[100%] ${lang === 'ar' ? 'ml-auto border-r-4 rounded-l-xl' : 'mr-auto border-l-4 rounded-r-xl'} ${theme.bgCard} ${theme.goldBorder} p-4 flex items-center justify-between ${theme.hover} transition-all duration-300 group animate-slideUp`} style={{animationDelay: '0.6s'}}><span className={`font-bold text-lg group-hover:${theme.goldText} transition ${theme.textMain}`}>{t.certifications}</span><Award size={24} className={`${theme.goldText} group-hover:scale-110 transition`}/></button>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-6 sticky top-32 animate-zoomIn">
           <div className="relative"><div className="absolute inset-0 bg-[#D4AF37] blur-[50px] opacity-20 rounded-full animate-pulse"></div><img src={logoImg} alt="Logo" className="w-64 h-64 md:w-80 md:h-80 object-contain relative z-10 drop-shadow-2xl animate-float" /></div>
           {/* QR REMOVED & REPLACED WITH TEXT */}
           <div className={`${theme.bgCard} p-6 rounded-xl border-2 ${theme.goldBorder} shadow-[0_0_30px_rgba(212,175,55,0.2)] bg-opacity-50 backdrop-blur-sm text-center transform hover:scale-105 transition duration-300 relative z-10`}>
              <h2 className={`text-xl md:text-2xl font-bold ${theme.goldText} tracking-wider leading-relaxed font-serif`}>
                  {t.trafficDept}
              </h2>
           </div>
        </div>
      </main>

      {activeModal && activeModal !== 'chat' && (
        <ModalFrame 
          title={
            activeModal === 'payment_modal' ? t.payNow :
            activeModal === 'account' ? t.accountInfo :
            activeModal === 'license' ? t.licenses :
            activeModal === 'training' ? t.trainingTracks :
            activeModal === 'course_market' ? t.trainingTracks : 
            activeModal === 'violations' ? t.violations :
            activeModal === 'history' ? t.paymentHistory : 
            activeModal === 'license_payment_method' ? t.choosePayment :
            activeModal === 'license_pay_at_unit_success' ? t.requestSuccess :
            activeModal === 'violation_info' ? t.violationInfo :
            t.certifications
          } 
          onClose={() => {setActiveModal(null); setSelectedPayment(null); setShowLicenseForm(false); setPayingItem(null); setSelectedViolationInfo(null);}}
          theme={theme}
          onBack={
            (activeModal === 'training' && selectedTrack) ? () => setSelectedTrack(null) :
            (activeModal === 'training' && trainingCategory) ? () => setTrainingCategory(null) :
            (activeModal === 'violations' && violationCategory) ? () => setViolationCategory(null) :
            null
          }
        >
          {renderModalContent()}
        </ModalFrame>
      )}

      {activeModal === 'chat' && <ChatInterface onClose={() => setActiveModal(null)} theme={theme}/>}
    </div>
  );
}