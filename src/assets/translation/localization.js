import LocalizedStrings from 'react-native-localization'
import english from './en'
import korean from './kr'

export default strings = new LocalizedStrings({
  한: korean,
  EN: english,
})

export const changeLanguage = (languageKey) => {
  strings.setLanguage(languageKey)
}
