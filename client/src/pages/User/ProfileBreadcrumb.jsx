import { ChevronRight } from 'lucide-react';

const ProfileBreadcrumb = ({ onNavigate }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 pl-4">
      <button 
        onClick={() => onNavigate('/home')}
        className="hover:text-purple-600 transition-colors"
      >
        Trang chủ
      </button>
      <ChevronRight className="w-4 h-4" />
      <span className="text-purple-600">Thông tin cá nhân</span>
    </div>
  );
};

export default ProfileBreadcrumb;