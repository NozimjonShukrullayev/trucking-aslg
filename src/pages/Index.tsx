import Advantages from '@/components/Advantages'
import BusinessSolution from '@/components/BusinessSolution'
import FAQ from '@/components/FAQ'
import HeroSection from '@/components/HeroSection'
import Partners from '@/components/Partners'
import Services from '@/components/Services'

const Index = () => {
	return (
		<div className='min-h-screen bg-[#1A1F2C]'>
			<HeroSection />
			<BusinessSolution />
			<Advantages />
			<Services />
			<FAQ />
			<Partners />
		</div>
	)
}

export default Index
