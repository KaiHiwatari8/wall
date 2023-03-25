import Header from '@wall/components/header/header';
import '@wall/styles/globals.module.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<style jsx global>{`
				body { margin: 0; }
			`}</style>
			<Header />
			< Component {...pageProps} />;
		</div>
	);
}
