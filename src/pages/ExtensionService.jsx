import { motion } from "framer-motion";
import mark from "../assets/mark.png";
import Wrapper from "./Wrapper";
import graphicdesign from "../assets/graphicdesign.png";
import uxdesign from "../assets/uxdesign.png";
import consultation from "../assets/consultation.png";

const ServiceExtension = () => {
	return (
		<div
			id='about'
			className='grid place-items-center justify-center w-full'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className='font-main flex flex-col justify-center items-center gap-10 xxxs:my-44 xs:my-52 sm:my-72 md:my-96 lg:my-[450px]'>
				<div className='flex gap-4 items-center'>
					<img
						src={mark}
						alt='Mark'
						className='xxxs:w-4 xxs:w-4 sm:w-5'
					/>
					<h1 className='text-black font-semibold xxxs:text-[10px] xxs:text-[12px] xs:text-xs sm:text-sm md:text-lg'>
						EXON’S SERVICES EXTENSION
					</h1>
				</div>
				<h1 className='text-black font-bold text-center xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64'>
					Not only that we are reliable for <br />
					developing your digital solution. We also <br /> offer...
				</h1>
				<Wrapper>
					<div className='text-white flex flex-col gap-5 mt-10'>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							viewport={{ once: true }}
							className='flex flex-col 2xl:flex-row items-center justify-end gap-5 p-5'>
							<div className='flex flex-col justify-between h-auto 2xl:h-[290px]  bg-[#262626] border-[2px] border-[#646464] shadow-2xl text-white rounded-2xl p-4'>
								<img
									src={graphicdesign}
									alt=''
									className='w-[60px] mt-5'
								/>
								<div>
									<h1 className='text-2xl mt-10 font-semibold'>Graphic Design</h1>
									<p className='mt-2'>
										We excel in both development and graphic design, creating
										advertisements that capture attention and engagement.
									</p>
								</div>
							</div>
							<div className='flex flex-col justify-between h-auto 2xl:h-[350px] bg-[#262626] border-[2px] border-[#646464] shadow-2xl text-white rounded-2xl p-4'>
								<img
									src={uxdesign}
									alt=''
									className='w-[60px] mt-5'
								/>
								<div>
									<h1 className='text-2xl mt-10 font-semibold'>UI/UX Design</h1>
									<p className='mt-2'>
										We also offer UI/UX design, crafting intuitive interfaces that enhance
										user experience and engagement.
									</p>
								</div>
							</div>
							<div className='flex flex-col justify-between h-auto 2xl:h-[290px] bg-[#262626] border-[2px] border-[#646464] shadow-2xl text-white rounded-2xl p-4'>
								<img
									src={consultation}
									alt=''
									className='w-[60px] mt-5'
								/>
								<div>
									<h1 className='text-2xl mt-10 font-semibold'>Consultation</h1>
									<p className='mt-2'>
										We also offer consultation services, providing expert advice to
										optimize your business’ digital products.
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</Wrapper>
			</motion.div>
		</div>
	);
};

export default ServiceExtension;
