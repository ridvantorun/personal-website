import { resumeData } from "../models/resumeData";


// Veriyi View katmanına ileten Controller
export const useResumeController = () => {
  // API'den veri çekme örneği (isteğe bağlı):
  // useEffect(() => { ... }, []);
  
  return { 
    data: resumeData,
    // İsteğe bağlı fonksiyonlar:
    getFullName: () => `${resumeData.name}`,
    getSocialIcon: (iconName) => {
      return resumeData.socials.find(social => social.icon === iconName);
    }
  };
};