import { Utensils } from 'lucide-react';
import { ReservationForm } from './components/ReservationForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-600 p-4 rounded-full shadow-lg">
              <Utensils className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Reserve Your Table
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience exceptional dining in an intimate atmosphere. Book your table today and let us create an unforgettable culinary journey for you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <ReservationForm />
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Fri: 5:00 PM - 11:00 PM</p>
              <p className="text-gray-600 text-sm">Sat-Sun: 12:00 PM - 11:00 PM</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              <p className="text-gray-600 text-sm">info@restaurant.com</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">123 Gourmet Street</p>
              <p className="text-gray-600 text-sm">Downtown, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
