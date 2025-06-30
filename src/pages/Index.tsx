import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import DockDemo from "@/components/DockDemo";

const Index = () => {
  const features = [
    {
      icon: "Zap",
      title: "Мгновенная активация",
      description: "Подключение за 2 минуты через QR-код",
    },
    {
      icon: "Globe",
      title: "Полное покрытие",
      description: "Связь во всех городах Испании",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Надёжная связь от проверенных операторов",
    },
  ];

  const plans = [
    { name: "Туристический", price: "€15", period: "/неделя", data: "5 ГБ" },
    {
      name: "Бизнес",
      price: "€35",
      period: "/месяц",
      data: "25 ГБ",
      popular: true,
    },
    { name: "Безлимитный", price: "€55", period: "/месяц", data: "∞" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Icon name="Smartphone" className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              eSIM España
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/tariffs"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Тарифы
            </Link>
            <Link
              to="/how-to-connect"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Как подключить
            </Link>
            <Link
              to="/support"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Поддержка
            </Link>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
              Купить eSIM
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            🚀 Новинка в России
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            eSIM для
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Испании
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Виртуальная SIM-карта для путешествий по Испании. Мгновенная
            активация, выгодные тарифы и стабильная связь от €15/неделя
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-lg px-8 py-3"
            >
              <Icon name="Smartphone" className="mr-2" size={20} />
              Выбрать тариф
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Icon name="Play" className="mr-2" size={20} />
              Как это работает
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon as any}
                    className="text-white"
                    size={24}
                  />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Выгодные тарифы для любых задач
          </h2>
          <p className="text-xl text-gray-600">
            От туристических поездок до длительного проживания
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500 transform scale-105" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  {plan.price}
                  <span className="text-lg text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="text-lg font-semibold text-purple-600">
                  {plan.data} интернета
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}`}
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/tariffs">
            <Button variant="outline" size="lg">
              Все тарифы
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готовы к путешествию по Испании?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Подключите eSIM прямо сейчас и получите связь сразу по прилёту
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              <Icon name="Smartphone" className="mr-2" size={20} />
              Купить eSIM для Испании
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Icon name="Smartphone" className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold text-gray-900">eSIM España</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/support"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Поддержка
            </Link>
            <Link
              to="/how-to-connect"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Инструкции
            </Link>
            <span className="text-gray-500">© 2024 eSIM España</span>
          </div>
        </div>
      </footer>

      {/* MacOS Dock */}
      <DockDemo />
    </div>
  );
};

export default Index;
