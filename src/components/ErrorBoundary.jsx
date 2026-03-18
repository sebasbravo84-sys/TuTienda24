import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-10 rounded-[2rem] bg-slate-900 border border-white/5 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Algo salió mal</h2>
          <p className="text-slate-400">No pudimos cargar este elemento. Por favor, intenta recargar la página.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
