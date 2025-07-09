import Link from 'next/Link';
import Banner from '@/components/banner';
import ProposalsBody from '@/components/propsBody';
import { useGlobal } from '@/contexts/GlobalContext';

export default function Proposals() {
	const { chainId } = useGlobal();

    return (
        <div className="flex flex-col mx-auto min-h-screen">
			<Banner />
			<nav className="flex flex-col md:flex-row items-center justify-between p-7">
				<div className="flex flex-col mb-6 md:mb-0">
					<div className="container flex items-center justify-center space-x-6 md:space-x-8">
						<img
							className="max-h-14 md:max-h-20"
							src="/assets/logo-web.png"
							alt=""
						/>
						<div
							className="border-solid border-black border-l-2 md:border-l-4"
							style={{ height: '4.5rem' }}
						></div>
						<div className="flex flex-col items-center min-h-fit">
							<p className="font-roboto text-lg md:text-2xl font-bold">
								community
							</p>
							<p className="font-roboto text-4xl md:text-5xl font-bold tracking-tighter">
								VOTE!
							</p>
						</div>
					</div>
					<div className="flex justify-between mt-5">
						<div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
							<a
								href="https://telluscoop.com"
								className="font-roboto text-xl font-bold"
							>
								home
							</a>
						</div>
						<div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
							<a
								href="https://community.telluscoop.com"
								className="font-roboto text-xl font-bold"
							>
								community
							</a>
						</div>
						<div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
							<a
								href="https://docs.telluscoop.com"
								className="font-roboto text-xl font-bold"
							>
								docs
							</a>
						</div>
						<div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
							<a
								href="https://medium.com/telluscoop"
								className="font-roboto text-xl font-bold"
							>
								blog
							</a>
						</div>
					</div>
				</div>
				<div className="flex min-w-[25%] justify-between items-center">
					{/* userKey && (
						<Link
							href="/proposals/user"
							className="flex flex-col items-center mr-10"
						>
							<img
								className="max-w-[3.5rem] md:max-w-[4rem]"
								src="/assets/user-logo.png"
								alt=""
							/>
							<span className="font-roboto text-sm md:text-md mt-2">
								{userKey.slice(0, 4) + '...' + userKey.slice(-4)}
							</span>
						</Link>
					) */}
					<div>
						<div className="inline-block relative">
							<span className="absolute inset-0 z-0 bg-black translate-x-1 translate-y-1"></span>
							{/* userKey ? (
								<button
									type="button"
									className="relative z-10 px-8 md:px-10 py-2 font-roboto text-xl md:text-2xl border-4 border-black transition-all text-telluscoopWhite bg-telluscoopGreen tracking-wide hover:bg-telluscoopRed"
									onMouseEnter={disconnectText}
									onMouseLeave={originalText}
									onClick={logoutAlbedo}
								>
									Connected
								</button>
							) : */ (
								<button
									type="button"
									className="relative z-10 px-8 md:px-10 py-2 font-roboto text-xl md:text-2xl border-4 border-black transition-all text-telluscoopWhite bg-telluscoopRed tracking-wide hover:bg-telluscoopGreen"
									// onClick={checkAlbedo}
								>
									Connect Wallet
								</button>
							) }
						</div>
					</div>
				</div>
			</nav>

            <ProposalsBody />
		</div>
    );
}
