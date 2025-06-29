import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HowToConnect = () => {
  const steps = [
    {
      number: "1",
      title: "Выберите тариф",
      description:
        "Определитесь с подходящим тарифным планом для вашей поездки в Испанию",
      icon: "ShoppingCart",
      color: "bg-blue-500",
    },
    {
      number: "2",
      title: "Оплатите онлайн",
      description: "Безопасная оплата картой или через любой удобный способ",
      icon: "CreditCard",
      color: "bg-purple-500",
    },
    {
      number: "3",
      title: "Получите QR-код",
      description: "На вашу почту придёт QR-код для активации eSIM",
      icon: "QrCode",
      color: "bg-pink-500",
    },
    {
      number: "4",
      title: "Отсканируйте код",
      description:
        "Используйте камеру телефона чтобы добавить eSIM в настройки",
      icon: "Camera",
      color: "bg-green-500",
    },
  ];

  const requirements = [
    "iPhone XS/XR или новее",
    "Google Pixel 3 или новее",
    "Samsung Galaxy S20 или новее",
    "Телефон должен быть разблокирован от оператора",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Как подключить eSIM для Испании
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простая инструкция по активации eSIM за 4 шага
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div
                className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <Icon
                  name={step.icon as any}
                  className="text-white"
                  size={24}
                />
              </div>
              <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-400">
                      0{step.number}
                    </span>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Smartphone" className="text-blue-600" size={24} />
                Совместимые устройства
              </CardTitle>
              <CardDescription>
                Убедитесь, что ваш телефон поддерживает eSIM
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" size={16} />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <Icon name="Info" className="inline mr-1" size={16} />
                  Не уверены в совместимости? Напишите нам в поддержку
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="HelpCircle" className="text-purple-600" size={24} />
                Частые вопросы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Когда активировать eSIM?
                </h4>
                <p className="text-gray-600 text-sm">
                  Активируйте eSIM по прилёту в Испанию для экономии трафика
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Работает ли eSIM в роуминге?
                </h4>
                <p className="text-gray-600 text-sm">
                  Да, в тарифе "Бизнес" включён роуминг по всему ЕС
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Можно ли использовать с основной SIM?
                </h4>
                <p className="text-gray-600 text-sm">
                  Да, eSIM работает параллельно с вашей основной SIM-картой
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Готовы попробовать?</h2>
              <p className="mb-6 opacity-90">
                Выберите тариф и получите eSIM уже через 5 минут
              </p>
              <Button
                className="bg-white text-purple-600 hover:bg-gray-100"
                size="lg"
              >
                Выбрать тариф
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowToConnect;
