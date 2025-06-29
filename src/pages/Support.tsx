import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Support = () => {
  const supportOptions = [
    {
      title: "Telegram чат",
      description: "Быстрые ответы от технической поддержки",
      icon: "MessageCircle",
      color: "bg-blue-500",
      contact: "@esim_spain_support",
    },
    {
      title: "Email поддержка",
      description: "Подробные консультации по электронной почте",
      icon: "Mail",
      color: "bg-purple-500",
      contact: "support@esim-spain.com",
    },
    {
      title: "WhatsApp",
      description: "Поддержка через популярный мессенджер",
      icon: "Phone",
      color: "bg-green-500",
      contact: "+34 900 123 456",
    },
  ];

  const faqItems = [
    {
      question: "Не могу активировать eSIM",
      answer:
        "Проверьте интернет-соединение и убедитесь, что телефон поддерживает eSIM. Попробуйте перезагрузить устройство.",
    },
    {
      question: "eSIM не работает в роуминге",
      answer:
        "Роуминг доступен только в тарифе 'Бизнес'. Убедитесь, что роуминг данных включён в настройках.",
    },
    {
      question: "Закончился трафик раньше времени",
      answer:
        "Вы можете докупить дополнительные гигабайты через личный кабинет или связаться с поддержкой.",
    },
    {
      question: "Потерял QR-код активации",
      answer:
        "Напишите нам с указанием номера заказа, мы вышлем новый QR-код в течение 10 минут.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Поддержка и помощь
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы помочь с настройкой и использованием eSIM
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {supportOptions.map((option, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div
                  className={`${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon
                    name={option.icon as any}
                    className="text-white"
                    size={24}
                  />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-mono text-sm text-gray-600 mb-4">
                  {option.contact}
                </p>
                <Button className="w-full">Связаться</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="HelpCircle" className="text-blue-600" size={24} />
                Частые вопросы
              </CardTitle>
              <CardDescription>
                Быстрые ответы на популярные вопросы
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  name="MessageSquare"
                  className="text-purple-600"
                  size={24}
                />
                Обратная связь
              </CardTitle>
              <CardDescription>
                Опишите вашу проблему, и мы поможем её решить
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Ваш email
                </label>
                <Input placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Тема обращения
                </label>
                <Input placeholder="Кратко опишите проблему" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Подробное описание
                </label>
                <Textarea
                  placeholder="Расскажите детально о проблеме..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <Icon name="Clock" className="mx-auto mb-2" size={32} />
                  <h3 className="font-semibold mb-1">Время работы</h3>
                  <p className="text-sm opacity-90">24/7 онлайн поддержка</p>
                </div>
                <div className="text-center">
                  <Icon name="Zap" className="mx-auto mb-2" size={32} />
                  <h3 className="font-semibold mb-1">Скорость ответа</h3>
                  <p className="text-sm opacity-90">В среднем 5 минут</p>
                </div>
                <div className="text-center">
                  <Icon name="Users" className="mx-auto mb-2" size={32} />
                  <h3 className="font-semibold mb-1">Языки поддержки</h3>
                  <p className="text-sm opacity-90">
                    Русский, Английский, Испанский
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
