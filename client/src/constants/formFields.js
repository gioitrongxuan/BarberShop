export const SIGN_UP_FIELDS = [
    { name: "firstName", label: "名", type: "text", icon: "fa-user" },
    { name: "lastName", label: "姓", type: "text", icon: "fa-user" },
    {
      name: "email",
      label: "Địa chỉ email",
      type: "email",
      icon: "fa-envelope",
      colSpan: true,
    },
    {
      name: "password",
      label: "Mật khẩu",
      type: "password",
      icon: "fa-lock",
    },
    {
      name: "confirmPassword",
      label: "Xác Nhận Mật Khẩu",
      type: "password",
      icon: "fa-lock",
    },
  ];
  
  export const GENDER_OPTIONS = ["男性", "女性", "その他"];