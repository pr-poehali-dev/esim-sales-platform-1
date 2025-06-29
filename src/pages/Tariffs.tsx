import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Tariffs = () => {
  const plans = [
    {
      name: "Туристический",
      price: "€15",
      period: "/неделя",
      data: "5 ГБ",
      calls: "100 минут",
      sms: "50 SMS",
      features: [
        "Безлимитные мессенджеры",
        "Покрытие по всей Испании",
        "Активация за 2 минуты",
      ],
      popular: false,
      color: "bg-blue-500",
    },
    {
      name: "Бизнес",
      price: "€35",
      period: "/месяц",
      data: "25 ГБ",
      calls: "Безлимитно",
      sms: "200 SMS",
      features: [
        "Роуминг в ЕС",
        "Приоритетная поддержка",
        "Настройка за 1 минуту",
      ],
      popular: true,
      color: "bg-purple-500",
    },
    {
      name: "Безлимитный",
      price: "€55",
      period: "/месяц",
      data: "Безлимитно",
      calls: "Безлимитно",
      sms: "Безлимитно",
      features: [
        "5G скорость",
        "Международные звонки",
        "Премиум поддержка 24/7",
      ],
      popular: false,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Тарифы eSIM для Испании
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите оптимальный тариф для путешествий или жизни в Испании
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transform hover:scale-105 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500 shadow-2xl" : "shadow-lg"}`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500">
                  Популярный
                </Badge>
              )}

              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon name="Smartphone" className="text-white" size={24} />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Идеально для вашего путешествия
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Интернет:</span>
                    <span className="font-semibold">{plan.data}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Звонки:</span>
                    <span className="font-semibold">{plan.calls}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">SMS:</span>
                    <span className="font-semibold">{plan.sms}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Icon
                        name="Check"
                        className="text-green-500 mr-2"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}`}
                  size="lg"
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Особенности наших eSIM
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Мгновенная активация
                </h3>
                <p className="text-gray-600 text-sm">
                  Подключение за 2 минуты через QR-код
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Полное покрытие
                </h3>
                <p className="text-gray-600 text-sm">
                  Связь во всех городах Испании
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-pink-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Надёжность</h3>
                <p className="text-gray-600 text-sm">
                  Стабильная связь от ведущих операторов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
