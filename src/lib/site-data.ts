import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  ChefHat,
  Hotel,
  MapPin,
  Megaphone,
  School,
  Sparkles,
} from "lucide-react";

export const siteUrl = "https://smkpariwisatapgri-majalengka.sch.id";

export const school = {
  officialName: "SMKS PGRI Majalengka",
  publicName: "SMK Pariwisata PGRI Majalengka",
  npsn: "20247188",
  status: "Swasta",
  educationType: "SMK",
  accreditation: "A",
  address:
    "Jl. Suma No. 481, Babakan Jawa, Kecamatan Majalengka, Kabupaten Majalengka, Jawa Barat",
  phone: "0233281647",
  whatsapp: "6281320004810",
  email: "smk.pariwisata@gmail.com",
  alternateEmail: "smkprwst@gmail.com",
  blog: "smk-pariwisata-pgri-mjl.blogspot.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=SMKS+PGRI+Majalengka+Jl.+Suma+No.+481",
  mapsEmbed:
    "https://www.google.com/maps?q=Jl.%20Suma%20No.%20481%20Babakan%20Jawa%20Majalengka&output=embed",
  hours: "Senin - Jumat, 07.00 - 15.00 WIB",
};

export const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Profil Sekolah", href: "/profil-sekolah" },
  { label: "Jurusan", href: "/jurusan" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Galeri & Kegiatan", href: "/galeri-kegiatan" },
  { label: "Berita & Prestasi", href: "/berita-prestasi" },
  { label: "Kontak", href: "/kontak" },
];

export const heroImage =
  "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1800&q=80";

export const imageLibrary = {
  students:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
  hotel:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
  culinary:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80",
  classroom:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  library:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80",
  field:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80",
  event:
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80",
  teamwork:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Halo SMK Pariwisata PGRI Majalengka, saya ingin bertanya tentang PPDB.";

export const stats = [
  { value: "A", label: "Akreditasi sekolah" },
  { value: "20247188", label: "NPSN sekolah" },
  { value: "Majalengka", label: "Lokasi strategis sekolah" },
  { value: "Hospitality", label: "Fokus keahlian utama" },
];

export const advantages: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Berbasis praktik",
    description:
      "Pembelajaran diarahkan pada pengalaman hospitality, pelayanan, tata boga dasar, dan kesiapan kerja.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Pilihan SMK terbaik di Majalengka",
    description:
      "Sekolah menyiapkan lingkungan belajar yang disiplin, ramah, dan relevan untuk calon siswa yang mencari SMK terbaik di Majalengka.",
    icon: Award,
  },
  {
    title: "PPDB mudah dikonsultasikan",
    description:
      "Calon siswa dan orang tua bisa bertanya langsung melalui WhatsApp tentang jurusan, jadwal, syarat, dan proses pendaftaran.",
    icon: Megaphone,
  },
  {
    title: "Dekat dengan kebutuhan daerah",
    description:
      "Pembelajaran diarahkan pada peluang kerja, layanan, pariwisata, perhotelan, dan wirausaha yang berkembang di Majalengka.",
    icon: MapPin,
  },
];

export const profileSections = {
  about:
    "SMK Pariwisata PGRI Majalengka adalah sekolah menengah kejuruan swasta di Majalengka yang menonjolkan pembelajaran bidang pariwisata, perhotelan, hospitality, dan layanan. Sekolah ini menjadi pilihan bagi calon siswa yang mencari SMK terbaik di Majalengka dengan bekal keterampilan praktis dan pembinaan karakter.",
  history:
    "Sekolah hadir untuk membuka akses pendidikan kejuruan yang relevan dengan kebutuhan industri hospitality, pariwisata, layanan, dan kewirausahaan di Majalengka serta wilayah sekitarnya.",
  principal:
    "Selamat datang di SMK Pariwisata PGRI Majalengka. Kami berkomitmen membangun karakter, keterampilan, dan budaya pelayanan agar lulusan siap bekerja, melanjutkan studi, atau berwirausaha.",
  vision:
    "Menjadi SMK pariwisata yang unggul, berkarakter, adaptif, dan dipercaya masyarakat.",
  missions: [
    "Menyelenggarakan pembelajaran vokasi yang disiplin, praktis, dan berorientasi industri.",
    "Membentuk siswa yang berakhlak, komunikatif, percaya diri, dan siap melayani.",
    "Mengembangkan kegiatan praktik, kewirausahaan, dan kolaborasi dengan dunia kerja.",
    "Meningkatkan kualitas layanan sekolah untuk siswa, orang tua, alumni, dan mitra.",
  ],
};

export const major = {
  name: "Perhotelan & Pariwisata",
  slug: "perhotelan-pariwisata",
  summary:
    "Program keahlian yang membekali siswa dengan keterampilan layanan tamu, tata graha, food & beverage, grooming, komunikasi, dan hospitality.",
  image: imageLibrary.hotel,
  competencies: [
    "Front office dan layanan tamu",
    "Housekeeping dan tata graha hotel",
    "Food & beverage service",
    "Tata boga dasar",
    "Barista dan hospitality skill",
    "Public speaking",
    "Bahasa Inggris pariwisata",
    "Grooming dan etika pelayanan",
  ],
  prospects: [
    "Hotel dan resort",
    "Restoran dan cafe",
    "Travel dan biro perjalanan",
    "Event organizer",
    "Kapal pesiar",
    "Industri hospitality",
    "Wirausaha kuliner/pariwisata",
  ],
};

export const facilities = [
  {
    title: "Ruang Kelas",
    category: "Akademik",
    description:
      "Ruang belajar untuk teori, diskusi, presentasi, dan pembinaan karakter siswa.",
    image: imageLibrary.classroom,
    icon: School,
  },
  {
    title: "Ruang Praktik Hospitality",
    category: "Praktik",
    description:
      "Area simulasi layanan tamu, grooming, dan praktik dasar dunia perhotelan.",
    image: imageLibrary.hotel,
    icon: Hotel,
  },
  {
    title: "Praktik Tata Boga",
    category: "Praktik",
    description:
      "Ruang pembelajaran dasar pengolahan makanan, pelayanan, dan kerja tim.",
    image: imageLibrary.culinary,
    icon: ChefHat,
  },
  {
    title: "Perpustakaan",
    category: "Literasi",
    description:
      "Fasilitas baca dan rujukan untuk mendukung literasi siswa.",
    image: imageLibrary.library,
    icon: BookOpen,
  },
  {
    title: "Mushola",
    category: "Pendukung",
    description:
      "Ruang ibadah untuk membangun budaya religius dan disiplin harian.",
    image: imageLibrary.students,
    icon: Sparkles,
  },
  {
    title: "Area Kegiatan",
    category: "Kesiswaan",
    description:
      "Ruang terbuka untuk upacara, olahraga, ekstrakurikuler, dan event sekolah.",
    image: imageLibrary.field,
    icon: Camera,
  },
];

export const gallery = [
  {
    title: "Praktik layanan tamu",
    category: "Praktik Jurusan",
    image: heroImage,
  },
  {
    title: "Simulasi hotel",
    category: "Hospitality",
    image: imageLibrary.hotel,
  },
  {
    title: "Kegiatan belajar",
    category: "Akademik",
    image: imageLibrary.classroom,
  },
  {
    title: "Praktik boga dasar",
    category: "Tata Boga",
    image: imageLibrary.culinary,
  },
  {
    title: "Event sekolah",
    category: "Kegiatan",
    image: imageLibrary.event,
  },
  {
    title: "Kolaborasi siswa",
    category: "Kesiswaan",
    image: imageLibrary.teamwork,
  },
];

export const posts = [
  {
    title: "PPDB SMK Pariwisata PGRI Majalengka Dibuka",
    type: "Berita",
    category: "PPDB",
    date: "30 April 2026",
    excerpt:
      "Informasi pendaftaran siswa baru, konsultasi jurusan, dan alur PPDB sekolah.",
    image: imageLibrary.students,
  },
  {
    title: "Praktik Hospitality Membentuk Kesiapan Kerja",
    type: "Berita",
    category: "Praktik",
    date: "22 April 2026",
    excerpt:
      "Siswa dibiasakan dengan standar pelayanan, komunikasi, grooming, dan kerja tim.",
    image: heroImage,
  },
  {
    title: "Prestasi dan Kegiatan Siswa",
    type: "Prestasi",
    category: "Kesiswaan",
    date: "15 April 2026",
    excerpt:
      "Dokumentasi kegiatan dan pencapaian siswa menjadi bukti sekolah yang aktif.",
    image: imageLibrary.event,
  },
];

export const ppdb = {
  year: "Tahun Ajaran 2026/2027",
  schedule: [
    "Pendaftaran gelombang awal: Mei - Juni 2026",
    "Konsultasi jurusan: setiap hari kerja",
    "Daftar ulang: mengikuti jadwal sekolah",
  ],
  requirements: [
    "Fotokopi ijazah atau surat keterangan lulus",
    "Fotokopi kartu keluarga",
    "Fotokopi akta kelahiran",
    "Pas foto terbaru",
    "Nomor WhatsApp aktif orang tua/wali",
  ],
  flow: [
    "Isi form minat PPDB di website",
    "Data otomatis disusun menjadi pesan WhatsApp",
    "Calon siswa mengirim pesan ke sekolah",
    "Pihak sekolah memberi arahan dan verifikasi berkas",
    "Calon siswa menyelesaikan daftar ulang",
  ],
};

export const faqs = [
  {
    question: "Apakah sekolah menerima konsultasi jurusan lewat WhatsApp?",
    answer:
      "Ya. Calon siswa dan orang tua dapat menghubungi sekolah melalui tombol WhatsApp di website.",
  },
  {
    question: "Bagaimana cara mengetahui biaya pendaftaran terbaru?",
    answer:
      "Calon siswa dan orang tua dapat menanyakan informasi biaya terbaru melalui WhatsApp atau datang langsung ke sekolah.",
  },
  {
    question: "Apakah form PPDB langsung mendaftarkan siswa?",
    answer:
      "Form ini membantu menyusun data minat PPDB ke WhatsApp. Pendaftaran resmi tetap mengikuti arahan dan verifikasi dari pihak sekolah.",
  },
];
