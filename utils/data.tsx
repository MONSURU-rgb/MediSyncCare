import AccountSetup from "@/components/icon/account-setup";
import HealthCollaboration from "@/components/icon/health-collaboration";
import MedicationInput from "@/components/icon/medication-input";
import SetReminder from "@/components/icon/set-reminder";
import TrackAdherence from "@/components/icon/track-adherence";
import { FiDownload } from "react-icons/fi";

export interface ArticleData {
  image: string;
  health_scope_1: string;
  health_scope_2: string;
  title: string;
  post_duration: string;
  writer?: string;
}

export const howItWorksSectionData = [
  {
    icon: <FiDownload color="#032F69" size="16px" />,
    title: "Download the App",
    description:
      "Begin by downloading the medical platform's app from the respective app store",
  },
  {
    icon: <AccountSetup />,
    title: "Account Setup",
    description:
      "Create an account within the app by providing necessary details and Set up a secure login to access the App",
  },
  {
    icon: <MedicationInput />,
    title: "Medication Input",
    description:
      "Input your prescribed medications into the app, specifying details like names, dosages, timing etc.",
  },
  {
    icon: <SetReminder />,
    title: "Set Reminders",
    description:
      "Utilize the app's reminder feature to set up alerts for each medication as per your prescribed schedule.",
  },
  {
    icon: <TrackAdherence />,
    title: "Track Adherence",
    description:
      "Regularly monitor your adherence progress using the app's tracking feature and review your intake history",
  },
  {
    icon: <HealthCollaboration />,
    title: "Health Collaboration",
    description:
      "Share adherence reports and progress updates with your healthcare provider ",
  },
];

export const dataForBlogSection = [
  {
    image: "url(/health-management-blog.png)",
    health_scope_1: "Health Management",
    health_scope_2: "Self Care",
    title: "How To Track Your Medicine Intake.",
    post_duration: "2 minute read",
  },
  {
    image: "url(/mobile-health-blog.png)",
    health_scope_1: "Mobile Health",
    health_scope_2: "Health Managment",
    title: "A guide on how to employ a medication reminder app.",
    post_duration: "3 minute read",
  },
  {
    image: "url(/medicine-intake-blog-image.png)",
    health_scope_1: "Mobile Health",
    health_scope_2: "Health Managment",
    title: "How To Always Track Your Medicine Intake.",
    post_duration: "2 minute read",
  },
];
export const dataForMedicineTrackingBlogSection = [
  {
    image: "url(/kidney-ears.png)",
    health_scope_1: "Health Management",
    health_scope_2: "Self Care",
    title: "Kidneys, eyes, ears, and more: Why do we have a spare?",
    post_duration: "2 minute read",
    writer: "Joanna Wellick",
  },
  {
    image: "url(/produce-prescription.png)",
    health_scope_1: "Mobile Health",
    health_scope_2: "Health Managment",
    title: "Produce prescriptions may promote better heart health.",
    post_duration: "3 minute read",
    writer: "Wilson John",
  },
  {
    image: "url(/abdominal-tract.png)",
    health_scope_1: "Mobile Health",
    health_scope_2: "Health Managment",
    title: "How To Always Track Your Medicine Intake.",
    post_duration: "2 minute read",
    writer: "Hilda Victoria",
  },
];
