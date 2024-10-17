import React from 'react';
import { Rocket, Coins, Users, ArrowRight } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white font-sans">
     <header className="container mx-auto py-6 px-4 flex items-center">
  <img src="/fren.jpg" alt="$FREN Logo" className="w-16 h-12 mr-4" />
  <div>
    <h1 className="text-4xl font-bold">$FREN Coin</h1>
    <p className="text-xl mt-2">The friendliest meme coin on TON blockchain!</p>
  </div>
</header>

      <main className="container mx-auto py-12 px-4">
      <section className="mb-12 text-center">
  <img src="/fren.jpg" alt="$FREN Logo" className=" mx-auto mb-6" />
  <h2 className="text-3xl font-semibold mb-6">What is $FREN?</h2>
  <p className="text-lg">$FREN is a community-driven meme coin launched on the TON blockchain. It's all about friendship, fun, and financial freedom!</p>
</section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <Rocket className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Transactions</h3>
            <p>Experience lightning-fast transfers on the TON blockchain.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <Coins className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
            <p>Enjoy minimal transaction costs with $FREN.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strong Community</h3>
            <p>Join a vibrant and supportive $FREN community.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to join the $FREN family?</h2>
          <a href="/" className="inline-flex items-center bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors">
            Get $FREN Now <ArrowRight className="ml-2" />
          </a>
        </section>
      </main>

      <footer className="container mx-auto py-6 px-4 text-center">
        <p>&copy; 2024 $FREN Coin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;