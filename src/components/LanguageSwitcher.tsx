import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useI18n } from "@/contexts/I18n/useI18n";

const LanguageSwitcher = () => {
  const { lang, changeLang } = useI18n();

  const onChange = (checked: boolean) => {
    changeLang(checked ? "en" : "ch");
  };

  return (
    <div className="flex justify-end gap-2 p-6">
      <Label htmlFor="华语">华语</Label>
      <Switch checked={lang === "en"} onCheckedChange={onChange} />
      <Label htmlFor="English">English</Label>
    </div>
  );
};

export default LanguageSwitcher;
