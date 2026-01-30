import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-success-light flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Pagamento Confirmado!
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Obrigado pela sua compra! Você receberá um email com o link para download do ebook em breve.
        </p>

        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
